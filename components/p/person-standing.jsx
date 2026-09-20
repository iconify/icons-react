import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aj0f01bnl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aj0f01bnl"/>`,
		"fallback": "pinhead:person-standing",
	});
}

export default Component;
