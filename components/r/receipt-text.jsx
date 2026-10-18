import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrkh3bzpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrkh3bzpu"/>`,
		"fallback": "vadivam:receipt-text",
	});
}

export default Component;
