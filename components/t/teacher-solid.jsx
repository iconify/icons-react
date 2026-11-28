import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofpz03o2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofpz03o2g"/>`,
		"fallback": "iconaut:teacher-solid",
	});
}

export default Component;
