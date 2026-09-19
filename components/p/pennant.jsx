import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xcqsw4v9t.css';
import '../../css/u/u73u14bjo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="xcqsw4v9t"/><path class="u73u14bjo"/></g>`,
		"fallback": "glyphs-poly:pennant",
	});
}

export default Component;
