import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/h8fn3ebqz.css';
import '../../css/a/a5av5abdy.css';
import '../../css/h/hpztoy_nb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="h8fn3ebqz wm-shadow"/><path class="a5av5abdy wm-shadow"/><path class="hpztoy_nb"/></g>`,
		"fallback": "withicons-brutal:repeat",
	});
}

export default Component;
