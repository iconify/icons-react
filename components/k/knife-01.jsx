import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qf-e8ge5n.css';
import '../../css/h/hmpf0b5vz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qf-e8ge5n"/><path class="hmpf0b5vz"/></g>`,
		"fallback": "hugeicons:knife-01",
	});
}

export default Component;
