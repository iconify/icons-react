import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s8dhtto7d.css';
import '../../css/j/jtt-uj7-l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s8dhtto7d"/><path class="jtt-uj7-l"/></g>`,
		"fallback": "glyphs:user-duo",
	});
}

export default Component;
