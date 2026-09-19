import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5mjnubmu.css';
import '../../css/f/fc3wgfb7j.css';
import '../../css/a/ac6otnb7i.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5mjnubmu"/><path class="fc3wgfb7j"/><path class="ac6otnb7i"/></g>`,
		"fallback": "glyphs:sunrise-duo",
	});
}

export default Component;
