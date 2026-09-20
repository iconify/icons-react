import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4kqh8bxz.css';
import '../../css/e/ep6tlrbos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4kqh8bxz"/><path class="ep6tlrbos"/>`,
		"fallback": "selfhst:surveyjs",
	});
}

export default Component;
