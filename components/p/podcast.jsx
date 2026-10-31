import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zqktypdwy.css';
import '../../css/u/ufal36mvs.css';
import '../../css/k/k47fxrb9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zqktypdwy"/><path class="ufal36mvs wm-shadow"/><path class="k47fxrb9v"/></g>`,
		"fallback": "withicons-brutal:podcast",
	});
}

export default Component;
