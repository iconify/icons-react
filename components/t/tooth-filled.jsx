import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/alghj5bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="alghj5bch"/>`,
		"fallback": "griddy-icons:tooth-filled",
	});
}

export default Component;
