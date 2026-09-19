import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv8thob0o.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv8thob0o"/>`,
		"fallback": "ps:prison-school-bus",
	});
}

export default Component;
