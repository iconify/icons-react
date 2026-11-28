import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlal61btb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlal61btb"/>`,
		"fallback": "iconaut:sidebar-expand-solid",
	});
}

export default Component;
