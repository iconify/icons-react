import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/l/laria4ctv.css';
import '../../css/o/ok8zy_hac.css';
import '../../css/g/goi7h-9jx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="laria4ctv"/><path clip-rule="evenodd" class="ok8zy_hac"/><path class="goi7h-9jx"/></g>`,
		"fallback": "icon-park-outline:test-tube",
	});
}

export default Component;
