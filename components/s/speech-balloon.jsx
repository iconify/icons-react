import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgzi0ccar.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgzi0ccar"/>`,
		"fallback": "dinkie-icons:speech-balloon",
	});
}

export default Component;
