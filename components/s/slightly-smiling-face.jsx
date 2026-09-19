import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa84dcblj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa84dcblj"/>`,
		"fallback": "dinkie-icons:slightly-smiling-face",
	});
}

export default Component;
