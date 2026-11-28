import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flliqrb5c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2yzajopy.css';
import '../../css/o/o4mwbn_ua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flliqrb5c secondary"/><g class="dt0cm9dhy primary"><path class="a2yzajopy"/><path class="o4mwbn_ua"/></g>`,
		"fallback": "iconaut:link-duo",
	});
}

export default Component;
