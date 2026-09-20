import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fccn48b9y.css';

const viewBox = {"width":202.395,"height":42.309,"left":-1.197,"top":-1.197};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fccn48b9y"/>`,
		"fallback": "thesvg-color:rivian",
	});
}

export default Component;
