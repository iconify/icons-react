import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my4upjy5t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my4upjy5t"/>`,
		"fallback": "pinhead:person-sleeping-in-eaved-leanto-shelter",
	});
}

export default Component;
