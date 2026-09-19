import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uju-xcg-d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uju-xcg-d"/>`,
		"fallback": "glyphs:play-duo",
	});
}

export default Component;
