import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oj7qqac8y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oj7qqac8y"/>`,
		"fallback": "devicon-plain:typescript",
	});
}

export default Component;
