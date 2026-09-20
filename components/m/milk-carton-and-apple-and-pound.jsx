import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-rn6bcfm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-rn6bcfm"/>`,
		"fallback": "pinhead:milk-carton-and-apple-and-pound",
	});
}

export default Component;
