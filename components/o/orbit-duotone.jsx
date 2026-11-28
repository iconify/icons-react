import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpk7p9tnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary qpk7p9tnz"/>`,
		"fallback": "iconaut:orbit-duotone",
	});
}

export default Component;
