import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfkjynb6a.css';
import '../../css/s/s55ofxbqw.css';
import '../../css/r/rvqiwkblr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jfkjynb6a"/><path class="s55ofxbqw"/><path class="rvqiwkblr"/></g>`,
		"fallback": "glyphs:toggle-1-duo",
	});
}

export default Component;
