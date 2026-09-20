import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps6tg9bbi.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ps6tg9bbi"/>`,
		"fallback": "pinhead:mobile-phone-with-touchscreen-and-antenna",
	});
}

export default Component;
