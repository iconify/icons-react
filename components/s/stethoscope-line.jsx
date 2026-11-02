import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tql0zqbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tql0zqbpj"/>`,
		"fallback": "mingcute:stethoscope-line",
	});
}

export default Component;
