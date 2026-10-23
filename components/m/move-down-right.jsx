import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga5l93quz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga5l93quz"/>`,
		"fallback": "vadivam:move-down-right",
	});
}

export default Component;
