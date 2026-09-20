import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyz1lph9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyz1lph9u"/>`,
		"fallback": "thesvg-color:openapi-initiative",
	});
}

export default Component;
