import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ricfbrb2c.css';
import '../../css/g/g4qqy3bgi.css';
import '../../css/y/yiwpdobhp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ricfbrb2c"/><path class="g4qqy3bgi"/><path class="yiwpdobhp"/>`,
		"fallback": "streamline-pixel:social-rewards-vip-crown-king",
	});
}

export default Component;
