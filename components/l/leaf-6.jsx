import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o48combuk.css';
import '../../css/m/m0bye0bbv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o48combuk"/><path class="m0bye0bbv"/>`,
		"fallback": "lineicons:leaf-6",
	});
}

export default Component;
