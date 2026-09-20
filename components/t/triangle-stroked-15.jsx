import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icj2v8t5d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icj2v8t5d"/>`,
		"fallback": "maki:triangle-stroked-15",
	});
}

export default Component;
