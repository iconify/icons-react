import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/az2rambwo.css';
import '../../css/e/ed3yr9bfb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="az2rambwo"/><path class="ed3yr9bfb"/></g>`,
		"fallback": "glyphs-poly:microphone",
	});
}

export default Component;
