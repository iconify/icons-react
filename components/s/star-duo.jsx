import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0mh3lbze.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0mh3lbze"/>`,
		"fallback": "glyphs:star-duo",
	});
}

export default Component;
