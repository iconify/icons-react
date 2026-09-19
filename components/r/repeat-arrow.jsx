import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xucik59fv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xucik59fv"/>`,
		"fallback": "dinkie-icons:repeat-arrow",
	});
}

export default Component;
