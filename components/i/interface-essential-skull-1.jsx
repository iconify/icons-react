import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-nsxabpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-nsxabpp"/>`,
		"fallback": "streamline-pixel:interface-essential-skull-1",
	});
}

export default Component;
