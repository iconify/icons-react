import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jxl67pbry.css';
import '../../css/e/ewk27hoxh.css';
import '../../css/e/enlxepbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="jxl67pbry"/><circle class="ewk27hoxh"/><circle class="enlxepbgk"/></g>`,
		"fallback": "lets-icons:meatballs-menu",
	});
}

export default Component;
