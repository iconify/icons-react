import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnv1knkjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnv1knkjo"/>`,
		"fallback": "vadivam:letter-u",
	});
}

export default Component;
