import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fboa2bbqg.css';
import '../../css/m/mspcjjimr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="fboa2bbqg"/><path class="mspcjjimr wm-a"/></g>`,
		"fallback": "withicons:snowflake-duo",
	});
}

export default Component;
