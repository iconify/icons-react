import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl6i0eb3h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl6i0eb3h"/>`,
		"fallback": "thesvg-color:national-rail",
	});
}

export default Component;
