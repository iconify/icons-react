import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0ipujbft.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0ipujbft"/>`,
		"fallback": "gis:map-rm",
	});
}

export default Component;
