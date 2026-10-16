import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0z26jaug.css';

const viewBox = {"width":68.505,"height":45.064};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0z26jaug"/>`,
		"fallback": "thesvg-color:kopia-dark",
	});
}

export default Component;
