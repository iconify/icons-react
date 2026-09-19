import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep1qe3bgw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep1qe3bgw"/>`,
		"fallback": "file-icons:shadowcljs",
	});
}

export default Component;
