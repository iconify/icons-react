import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4kqh8bxz.css';
import '../../css/y/y2njiebws.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4kqh8bxz"/><path class="y2njiebws"/>`,
		"fallback": "selfhst:surveyjs",
	});
}

export default Component;
