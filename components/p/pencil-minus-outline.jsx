import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvo6zwbqk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvo6zwbqk"/>`,
		"fallback": "mdi:pencil-minus-outline",
	});
}

export default Component;
