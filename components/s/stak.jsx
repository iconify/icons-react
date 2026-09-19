import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x12q_okfo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x12q_okfo"/>`,
		"fallback": "cryptocurrency:stak",
	});
}

export default Component;
