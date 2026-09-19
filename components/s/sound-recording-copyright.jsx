import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynhhlqb6o.css';
import '../../css/k/kkl6jsbqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ynhhlqb6o"/><path class="kkl6jsbqo"/>`,
		"fallback": "flat-color-icons:sound-recording-copyright",
	});
}

export default Component;
