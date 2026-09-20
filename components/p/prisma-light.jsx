import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3m2ftunn.css';

const viewBox = {"width":256,"height":310};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3m2ftunn"/>`,
		"fallback": "thesvg-color:prisma-light",
	});
}

export default Component;
