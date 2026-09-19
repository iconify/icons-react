import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1-e9ybfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1-e9ybfq"/>`,
		"fallback": "griddy-icons:translate-alt-filled",
	});
}

export default Component;
