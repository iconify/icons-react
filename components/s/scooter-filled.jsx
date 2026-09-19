import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3_447hrg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3_447hrg"/>`,
		"fallback": "griddy-icons:scooter-filled",
	});
}

export default Component;
