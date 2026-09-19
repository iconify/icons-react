import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ube0iz5zh.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ube0iz5zh"/>`,
		"fallback": "dinkie-icons:speech-balloon-question-small-filled",
	});
}

export default Component;
