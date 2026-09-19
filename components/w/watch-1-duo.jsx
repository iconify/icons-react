import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1a_9_jpm.css';
import '../../css/t/tcrwktbxz.css';
import '../../css/j/j8h34ia8c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1a_9_jpm"/><path class="tcrwktbxz"/><path class="j8h34ia8c"/></g>`,
		"fallback": "glyphs:watch-1-duo",
	});
}

export default Component;
