import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ymdqawbsc.css';
import '../../css/g/gt-sgqbuw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ymdqawbsc"/><path class="gt-sgqbuw"/></g>`,
		"fallback": "glyphs:microphone-slash-duo",
	});
}

export default Component;
