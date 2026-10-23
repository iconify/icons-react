import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mr0ya4bou.css';
import '../../css/g/g4_6w77hr.css';
import '../../css/n/n8ny8e3ug.css';
import '../../css/t/tyi8o0bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mr0ya4bou"/><path class="g4_6w77hr"/><path class="n8ny8e3ug"/><path class="tyi8o0bkh"/></g>`,
		"fallback": "matita:timer",
	});
}

export default Component;
