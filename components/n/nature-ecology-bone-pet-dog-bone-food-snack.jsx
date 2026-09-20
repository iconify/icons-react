import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpey4z4rt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpey4z4rt"/>`,
		"fallback": "streamline:nature-ecology-bone-pet-dog-bone-food-snack",
	});
}

export default Component;
