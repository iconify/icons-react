import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t64ob-b4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t64ob-b4r"/>`,
		"fallback": "vadivam:text-align-justify-center",
	});
}

export default Component;
