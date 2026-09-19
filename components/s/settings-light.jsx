import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fecnydbin.css';
import '../../css/w/w01gi-b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fecnydbin"/><path class="w01gi-b4i"/></g>`,
		"fallback": "iconamoon:settings-light",
	});
}

export default Component;
