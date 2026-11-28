import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oav543bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oav543bla primary"/>`,
		"fallback": "iconaut:message-circle-duotone",
	});
}

export default Component;
