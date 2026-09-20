import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zila6obrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zila6obrj"/>`,
		"fallback": "streamline-ultimate:microphone-1-bold",
	});
}

export default Component;
