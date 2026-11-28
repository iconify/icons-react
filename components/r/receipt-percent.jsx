import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/ht47y72rz.css';
import '../../css/t/tk-e4lsnl.css';
import '../../css/g/g5oul6r0u.css';
import '../../css/f/f_7w_yozd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ht47y72rz"/><path class="tk-e4lsnl"/><path class="g5oul6r0u"/><path class="f_7w_yozd"/></g>`,
		"fallback": "iconaut:receipt-percent",
	});
}

export default Component;
