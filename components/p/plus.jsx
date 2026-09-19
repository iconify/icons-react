import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/uqz3ssidv.css';
import '../../css/g/gab0h-cqq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="uqz3ssidv"/><path class="gab0h-cqq"/></g>`,
		"fallback": "glyphs-poly:plus",
	});
}

export default Component;
