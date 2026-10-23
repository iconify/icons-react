import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsds0r5em.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsds0r5em"/>`,
		"fallback": "vadivam:tree-deciduous",
	});
}

export default Component;
