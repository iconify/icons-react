import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4a8etro.css';
import '../../css/v/vl8d-nbty.css';
import '../../css/s/shthbcb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4a8etro"/><path class="vl8d-nbty"/><path class="shthbcb5z"/>`,
		"fallback": "prime:sort-numeric-alt-down",
	});
}

export default Component;
