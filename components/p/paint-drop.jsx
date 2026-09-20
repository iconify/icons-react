import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8v7zs.css';
import '../../css/s/so-from-28.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8v7zs"/>`,
		"fallback": "line-md:paint-drop",
	});
}

export default Component;
