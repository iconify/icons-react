import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixn7vnb_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixn7vnb_d"/>`,
		"fallback": "glyphs:send",
	});
}

export default Component;
