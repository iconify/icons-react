import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu6mrmzlt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu6mrmzlt"/>`,
		"fallback": "energy-icons:sigma-20",
	});
}

export default Component;
