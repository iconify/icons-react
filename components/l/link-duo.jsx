import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3hh6zbek.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3hh6zbek"/>`,
		"fallback": "glyphs:link-duo",
	});
}

export default Component;
