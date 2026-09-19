import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vyy96ws_l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vyy96ws_l"/>`,
		"fallback": "glyphs:j",
	});
}

export default Component;
