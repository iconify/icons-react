import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1c4u9bgx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1c4u9bgx"/>`,
		"fallback": "dinkie-icons:shorts",
	});
}

export default Component;
