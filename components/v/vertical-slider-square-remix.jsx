import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ag3297hsw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ag3297hsw"/>`,
		"fallback": "streamline:vertical-slider-square-remix",
	});
}

export default Component;
