import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh2rnzj_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oh2rnzj_k"/>`,
		"fallback": "vadivam:tag",
	});
}

export default Component;
