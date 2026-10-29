import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gesw5mb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gesw5mb4r"/>`,
		"fallback": "vadivam:panels-right-bottom",
	});
}

export default Component;
