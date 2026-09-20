import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agkwzcc7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agkwzcc7a"/>`,
		"fallback": "si:json-duotone",
	});
}

export default Component;
