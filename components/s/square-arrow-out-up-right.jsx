import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob0bzz9ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob0bzz9ep"/>`,
		"fallback": "vadivam:square-arrow-out-up-right",
	});
}

export default Component;
