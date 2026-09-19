import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/s/s9v3gsb7k.css';
import '../../css/g/gcv9n7b1n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="s9v3gsb7k"/><path class="gcv9n7b1n"/></g>`,
		"fallback": "icon-park-solid:pennant",
	});
}

export default Component;
