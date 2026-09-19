import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ng5_5oycj.css';
import '../../css/p/pt5wbdc-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ng5_5oycj"/><path class="duoicon-primary-layer pt5wbdc-i"/>`,
		"fallback": "duo-icons:smartphone-vibration",
	});
}

export default Component;
