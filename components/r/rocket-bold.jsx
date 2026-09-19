import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtg-ggbml.css';
import '../../css/b/bi2kzubhg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rtg-ggbml"/><path class="bi2kzubhg"/></g>`,
		"fallback": "glyphs:rocket-bold",
	});
}

export default Component;
