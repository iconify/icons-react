import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwa1tob8y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwa1tob8y"/>`,
		"fallback": "pinhead:person-riding-in-stroller",
	});
}

export default Component;
