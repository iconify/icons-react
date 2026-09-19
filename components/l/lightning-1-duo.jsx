import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bsssxmnnx.css';
import '../../css/r/rp3ollbom.css';
import '../../css/o/on8g3mivh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bsssxmnnx"/><path class="rp3ollbom"/><path class="on8g3mivh"/></g>`,
		"fallback": "glyphs:lightning-1-duo",
	});
}

export default Component;
