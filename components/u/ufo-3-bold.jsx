import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2a7jyorm.css';
import '../../css/r/r5df1_1cl.css';
import '../../css/m/mpmodohnh.css';
import '../../css/g/g5x0rrl9m.css';
import '../../css/n/nx5s7dbqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e2a7jyorm"/><path class="r5df1_1cl"/><path class="mpmodohnh"/><path class="g5x0rrl9m"/><path class="nx5s7dbqj"/>`,
		"fallback": "solar:ufo-3-bold",
	});
}

export default Component;
