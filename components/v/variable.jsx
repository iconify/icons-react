import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnj6icb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hnj6icb-s"/>`,
		"fallback": "vadivam:variable",
	});
}

export default Component;
