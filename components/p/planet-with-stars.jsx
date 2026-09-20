import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lggkmnb8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lggkmnb8r"/>`,
		"fallback": "roentgen:planet-with-stars",
	});
}

export default Component;
