import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd_qvjb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd_qvjb8y"/>`,
		"fallback": "iconamoon:sign-times-square-thin",
	});
}

export default Component;
