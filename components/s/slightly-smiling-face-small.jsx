import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d__i3j54m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d__i3j54m"/>`,
		"fallback": "dinkie-icons:slightly-smiling-face-small",
	});
}

export default Component;
