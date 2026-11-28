import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m_movwbem.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m_movwbem"/>`,
		"fallback": "pullo:rock-tall-thin",
	});
}

export default Component;
