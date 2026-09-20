import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-cyvkb2m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-cyvkb2m"/>`,
		"fallback": "radix-icons:pin-top",
	});
}

export default Component;
