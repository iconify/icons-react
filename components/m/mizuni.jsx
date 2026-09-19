import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twxgav9tf.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twxgav9tf"/>`,
		"fallback": "fa6-brands:mizuni",
	});
}

export default Component;
