import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtwlgebmd.css';
import '../../css/s/swjj-jb3z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qtwlgebmd"/><path class="swjj-jb3z"/></g>`,
		"fallback": "glyphs:seek-skip-duo",
	});
}

export default Component;
