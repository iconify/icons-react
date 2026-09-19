import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j65b3x7pl.css';
import '../../css/q/quiye1bnu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="j65b3x7pl"/><path class="quiye1bnu"/></g>`,
		"fallback": "glyphs-poly:scissors-open-1",
	});
}

export default Component;
