import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tov7z5b4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tov7z5b4i"/>`,
		"fallback": "pixelarticons:toke-circle",
	});
}

export default Component;
