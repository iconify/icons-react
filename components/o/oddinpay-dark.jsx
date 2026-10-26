import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loraotb0j.css';

const viewBox = {"width":35,"height":35};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loraotb0j"/>`,
		"fallback": "thesvg-color:oddinpay-dark",
	});
}

export default Component;
