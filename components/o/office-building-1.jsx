import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0b3sfbym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0b3sfbym"/>`,
		"fallback": "streamline-flex:office-building-1",
	});
}

export default Component;
