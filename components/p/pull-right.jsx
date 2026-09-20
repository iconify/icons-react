import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_l0zgbxo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_l0zgbxo"/>`,
		"fallback": "system-uicons:pull-right",
	});
}

export default Component;
