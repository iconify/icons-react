import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvfmzlb8s.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvfmzlb8s"/>`,
		"fallback": "dinkie-icons:shrug",
	});
}

export default Component;
