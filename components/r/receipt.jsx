import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o43zpgbqc.css';
import '../../css/w/w5cu6gb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o43zpgbqc"/><path class="w5cu6gb4d"/>`,
		"fallback": "bx:receipt",
	});
}

export default Component;
