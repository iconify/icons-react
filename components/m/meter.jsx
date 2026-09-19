import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feqmr1ozi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feqmr1ozi"/>`,
		"fallback": "icomoon-free:meter",
	});
}

export default Component;
