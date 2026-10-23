import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_n4mbcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg_n4mbcr"/>`,
		"fallback": "vadivam:text-align-justify-end",
	});
}

export default Component;
