import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oecy3qhop.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gtipehbld.css';
import '../../css/w/wpsx3fbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oecy3qhop secondary"/><g class="dt0cm9dhy primary"><path class="gtipehbld"/><path class="wpsx3fbcj"/></g>`,
		"fallback": "iconaut:message-heart-duo",
	});
}

export default Component;
