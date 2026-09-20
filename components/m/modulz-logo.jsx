import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djsqtnb5a.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djsqtnb5a"/>`,
		"fallback": "radix-icons:modulz-logo",
	});
}

export default Component;
