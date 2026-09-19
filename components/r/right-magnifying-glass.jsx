import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njajxabqc.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njajxabqc"/>`,
		"fallback": "dinkie-icons:right-magnifying-glass",
	});
}

export default Component;
