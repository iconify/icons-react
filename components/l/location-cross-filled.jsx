import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxqi0yxyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxqi0yxyi"/>`,
		"fallback": "reicon:location-cross-filled",
	});
}

export default Component;
