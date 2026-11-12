import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owb878b7v.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owb878b7v"/>`,
		"fallback": "devicon:stylelint-wordmark",
	});
}

export default Component;
