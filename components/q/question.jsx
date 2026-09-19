import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umxo5vd2l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umxo5vd2l"/>`,
		"fallback": "glyphs-poly:question",
	});
}

export default Component;
