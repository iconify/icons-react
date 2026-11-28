import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djmxe_n-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djmxe_n-i primary"/>`,
		"fallback": "iconaut:outdent-duotone",
	});
}

export default Component;
