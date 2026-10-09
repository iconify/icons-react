import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shrshrltt.css';
import '../../css/j/jqow3gbkz.css';
import '../../css/e/euu9n8cdz.css';
import '../../css/x/x_1wshpcv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shrshrltt"/><path class="jqow3gbkz"/><path class="euu9n8cdz"/><path class="x_1wshpcv"/>`,
		"fallback": "energy-icons:plant-pot-20-bold",
	});
}

export default Component;
