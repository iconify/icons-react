import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwuxz88lx.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwuxz88lx"/>`,
		"fallback": "topcoat:share",
	});
}

export default Component;
