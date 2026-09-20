import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdc9n4l0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kdc9n4l0q"/>`,
		"fallback": "keyline-icons:list-minus",
	});
}

export default Component;
