import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3117v-uo.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3117v-uo"/>`,
		"fallback": "picon:spinner",
	});
}

export default Component;
