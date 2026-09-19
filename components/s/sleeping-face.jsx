import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmuh98bbd.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmuh98bbd"/>`,
		"fallback": "dinkie-icons:sleeping-face",
	});
}

export default Component;
