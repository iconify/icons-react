import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftv_mlbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftv_mlbiu"/>`,
		"fallback": "mdi:npm-variant",
	});
}

export default Component;
