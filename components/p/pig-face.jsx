import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me6yobbjq.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me6yobbjq"/>`,
		"fallback": "dinkie-icons:pig-face",
	});
}

export default Component;
