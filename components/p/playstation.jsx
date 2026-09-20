import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tclq6vkvr.css';

const viewBox = {"width":122.88,"height":95.18};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tclq6vkvr"/>`,
		"fallback": "thesvg-color:playstation",
	});
}

export default Component;
