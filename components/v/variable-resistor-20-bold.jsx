import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7_v_006l.css';
import '../../css/o/ort-_6bff.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7_v_006l"/><path class="ort-_6bff"/>`,
		"fallback": "energy-icons:variable-resistor-20-bold",
	});
}

export default Component;
