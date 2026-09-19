import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wo7iwkb_e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wo7iwkb_e"/>`,
		"fallback": "glyphs:rectangle-duo",
	});
}

export default Component;
