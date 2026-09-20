import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0a0lpu5s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0a0lpu5s"/>`,
		"fallback": "material-icon-theme:verse-light",
	});
}

export default Component;
