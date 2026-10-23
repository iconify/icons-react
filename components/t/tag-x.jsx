import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uixhc0f4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uixhc0f4p"/>`,
		"fallback": "vadivam:tag-x",
	});
}

export default Component;
