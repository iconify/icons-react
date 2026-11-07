import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnhj8acgw.css';
import '../../css/z/zea0r4yqa.css';
import '../../css/r/rx8h3bbfe.css';
import '../../css/z/zp1wzr3to.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hnhj8acgw"/><path class="zea0r4yqa"/><path clip-rule="evenodd" class="rx8h3bbfe"/><path class="zp1wzr3to"/>`,
		"fallback": "solar:users-group-rounded-outline",
	});
}

export default Component;
