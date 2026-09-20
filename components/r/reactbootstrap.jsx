import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksr8kl3ps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ksr8kl3ps"/>`,
		"fallback": "simple-icons:reactbootstrap",
	});
}

export default Component;
