import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y83-mxdaj.css';
import '../../css/m/mdqiz-ben.css';

const viewBox = {"width":117.173,"height":117.173};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(-39.688 -207.42)"><circle class="y83-mxdaj"/><path class="mdqiz-ben"/></g>`,
		"fallback": "thesvg-color:shiori",
	});
}

export default Component;
