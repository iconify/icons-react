import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t65n2-b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t65n2-b3k"/>`,
		"fallback": "iconamoon:sign-f-light",
	});
}

export default Component;
