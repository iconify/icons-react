import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/k/kse_9vckm.css';
import '../../css/l/l23-6lzft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path clip-rule="evenodd" class="kse_9vckm"/><path class="l23-6lzft"/></g>`,
		"fallback": "icon-park-outline:water-rate-two",
	});
}

export default Component;
