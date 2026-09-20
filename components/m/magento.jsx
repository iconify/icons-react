import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jab7xhb0n.css';
import '../../css/v/vla3-w5tf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jab7xhb0n"/><path class="vla3-w5tf"/>`,
		"fallback": "lineicons:magento",
	});
}

export default Component;
