import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu0s4ebai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu0s4ebai"/>`,
		"fallback": "iconaut:spotify-solid",
	});
}

export default Component;
