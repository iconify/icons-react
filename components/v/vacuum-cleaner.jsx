import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ryzeuhbze.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ryzeuhbze"/>`,
		"fallback": "pinhead:vacuum-cleaner",
	});
}

export default Component;
