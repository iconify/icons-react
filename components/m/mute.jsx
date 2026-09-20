import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubbqkn23c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubbqkn23c"/>`,
		"fallback": "raphael:mute",
	});
}

export default Component;
