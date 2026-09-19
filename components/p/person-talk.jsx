import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzmrovd6g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzmrovd6g"/>`,
		"fallback": "si-glyph:person-talk",
	});
}

export default Component;
