import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isf4hnbqo.css';
import '../../css/w/wxo8ojinh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isf4hnbqo"/><path class="wxo8ojinh"/>`,
		"fallback": "energy-icons:penguin-48-bold",
	});
}

export default Component;
