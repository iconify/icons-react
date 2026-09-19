import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr6m2nb0c.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr6m2nb0c"/>`,
		"fallback": "dinkie-icons:slightly-smiling-face-filled",
	});
}

export default Component;
