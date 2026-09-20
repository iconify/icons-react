import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6xk0f5fc.css';
import '../../css/m/mi_ecrt5s.css';
import '../../css/b/bst7l4f5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6xk0f5fc"/><path class="mi_ecrt5s"/><path class="bst7l4f5b"/>`,
		"fallback": "selfhst:minecraft-creeper",
	});
}

export default Component;
