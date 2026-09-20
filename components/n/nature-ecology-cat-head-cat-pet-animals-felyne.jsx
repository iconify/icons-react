import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q8r5a9xgh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q8r5a9xgh"/>`,
		"fallback": "streamline:nature-ecology-cat-head-cat-pet-animals-felyne",
	});
}

export default Component;
