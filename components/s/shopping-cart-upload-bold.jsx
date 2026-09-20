import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqnf4kbgb.css';
import '../../css/g/gxm3dk91i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqnf4kbgb"/><path class="gxm3dk91i"/>`,
		"fallback": "streamline-ultimate:shopping-cart-upload-bold",
	});
}

export default Component;
