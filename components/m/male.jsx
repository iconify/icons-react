import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp5jewbjm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp5jewbjm"/>`,
		"fallback": "glyphs:male",
	});
}

export default Component;
