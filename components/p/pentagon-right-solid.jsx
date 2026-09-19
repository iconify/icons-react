import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef3j2cb8g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef3j2cb8g"/>`,
		"fallback": "carbon:pentagon-right-solid",
	});
}

export default Component;
