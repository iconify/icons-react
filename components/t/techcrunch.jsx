import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m49-_o60c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m49-_o60c"/>`,
		"fallback": "selfhst:techcrunch",
	});
}

export default Component;
