import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btpw2594y.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ibpzieblb.css';
import '../../css/a/aa-euubin.css';
import '../../css/d/diivyqg2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btpw2594y secondary"/><g class="dt0cm9dhy primary"><circle class="ibpzieblb"/><path class="aa-euubin"/><path class="diivyqg2d"/></g>`,
		"fallback": "iconaut:route-x-duo",
	});
}

export default Component;
