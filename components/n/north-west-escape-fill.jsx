import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r67n7p6du.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r67n7p6du"/>`,
		"fallback": "si:north-west-escape-fill",
	});
}

export default Component;
