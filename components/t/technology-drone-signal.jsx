import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdygn-ngl.css';
import '../../css/h/hq8skxj4p.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdygn-ngl"/><path class="hq8skxj4p"/>`,
		"fallback": "streamline-pixel:technology-drone-signal",
	});
}

export default Component;
