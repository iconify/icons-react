import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z5uub3b9w.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z5uub3b9w"/>`,
		"fallback": "glyphs:watch-2",
	});
}

export default Component;
