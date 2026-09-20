import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruon_hbmz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruon_hbmz"/>`,
		"fallback": "streamline-pixel:interface-essential-information-circle-2",
	});
}

export default Component;
