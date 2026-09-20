import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2zb1x5to.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2zb1x5to"/>`,
		"fallback": "pinhead:station-wagon-with-raised-hood",
	});
}

export default Component;
