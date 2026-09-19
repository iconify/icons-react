import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2qd5b7pd.css';
import '../../css/a/abf4dkbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2qd5b7pd"/><path class="abf4dkbkb"/>`,
		"fallback": "boxicons:moon-stars-filled",
	});
}

export default Component;
