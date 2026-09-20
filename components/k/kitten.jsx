import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0ts1q8ff.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0ts1q8ff"/>`,
		"fallback": "picon:kitten",
	});
}

export default Component;
