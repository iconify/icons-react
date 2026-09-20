import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqn0aesut.css';
import '../../css/o/onkqmobiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqn0aesut"/><path class="onkqmobiw"/></g>`,
		"fallback": "reicon:medal-star3",
	});
}

export default Component;
