import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-r60-bqt.css';
import '../../css/b/bkk1zoblz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-r60-bqt"/><path class="bkk1zoblz"/>`,
		"fallback": "streamline-pixel:map-navigation-pin-location-1",
	});
}

export default Component;
