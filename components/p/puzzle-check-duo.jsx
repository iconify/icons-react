import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m60pqtldl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h0a8jr8wu.css';
import '../../css/q/q96y81bii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m60pqtldl secondary"/><g class="dt0cm9dhy primary"><path class="h0a8jr8wu"/><path class="q96y81bii"/></g>`,
		"fallback": "iconaut:puzzle-check-duo",
	});
}

export default Component;
