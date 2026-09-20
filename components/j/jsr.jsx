import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fb-q3w5sr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fb-q3w5sr"/>`,
		"fallback": "material-icon-theme:jsr",
	});
}

export default Component;
