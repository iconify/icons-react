import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/r/rv3khnsij.css';
import '../../css/g/g7241j9by.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="rv3khnsij"/><path class="g7241j9by"/></g>`,
		"fallback": "glyphs-poly:sort-1",
	});
}

export default Component;
