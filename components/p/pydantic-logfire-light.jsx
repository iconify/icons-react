import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykoimm3yx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykoimm3yx"/>`,
		"fallback": "selfhst:pydantic-logfire-light",
	});
}

export default Component;
