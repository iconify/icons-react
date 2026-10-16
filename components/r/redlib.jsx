import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqu2_e4mu.css';
import '../../css/x/xqvmvkbpa.css';
import '../../css/g/g-eromb9s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(1 0 0 -1 0 512)"><circle class="pqu2_e4mu"/><path class="xqvmvkbpa"/><path class="g-eromb9s"/></g>`,
		"fallback": "thesvg-color:redlib",
	});
}

export default Component;
