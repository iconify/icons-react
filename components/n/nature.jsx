import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i23y3acgd.css';

const viewBox = {"width":304,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i23y3acgd"/>`,
		"fallback": "zmdi:nature",
	});
}

export default Component;
