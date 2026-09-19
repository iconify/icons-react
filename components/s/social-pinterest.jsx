import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rl3i8zbna.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rl3i8zbna"/>`,
		"fallback": "foundation:social-pinterest",
	});
}

export default Component;
