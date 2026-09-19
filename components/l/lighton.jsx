import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppty-ybvt.css';

const viewBox = {"width":961,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppty-ybvt"/>`,
		"fallback": "whh:lighton",
	});
}

export default Component;
