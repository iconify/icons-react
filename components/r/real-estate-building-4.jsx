import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylvg4v1fy.css';
import '../../css/h/hsx1pzxph.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylvg4v1fy"/><path class="hsx1pzxph"/>`,
		"fallback": "streamline-pixel:real-estate-building-4",
	});
}

export default Component;
