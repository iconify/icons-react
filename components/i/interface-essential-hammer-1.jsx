import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g154nh6_x.css';
import '../../css/b/b_5co9z5c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g154nh6_x"/><path class="b_5co9z5c"/>`,
		"fallback": "streamline-pixel:interface-essential-hammer-1",
	});
}

export default Component;
