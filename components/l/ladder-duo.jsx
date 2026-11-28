import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hesi3jb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hesi3jb4w"/>`,
		"fallback": "iconaut:ladder-duo",
	});
}

export default Component;
