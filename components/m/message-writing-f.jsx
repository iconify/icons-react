import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sszv_ia1s.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sszv_ia1s"/>`,
		"fallback": "jam:message-writing-f",
	});
}

export default Component;
