import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq733hbmx.css';

const viewBox = {"width":33,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq733hbmx"/>`,
		"fallback": "fontisto:rains",
	});
}

export default Component;
