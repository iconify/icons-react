import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azh2q3b1x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azh2q3b1x"/>`,
		"fallback": "streamline-pixel:interface-essential-speaker-announce",
	});
}

export default Component;
