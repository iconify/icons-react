import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bcv1anbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bcv1anbrb"/>`,
		"fallback": "token:rev",
	});
}

export default Component;
