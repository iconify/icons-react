import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tugpvmjvi.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tugpvmjvi"/>`,
		"fallback": "dinkie-icons:trophy",
	});
}

export default Component;
