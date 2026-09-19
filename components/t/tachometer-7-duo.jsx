import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rymil3blb.css';
import '../../css/p/pcz6l7bqo.css';
import '../../css/t/tx9rzfbdi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rymil3blb"/><path class="pcz6l7bqo"/><path class="tx9rzfbdi"/></g>`,
		"fallback": "glyphs:tachometer-7-duo",
	});
}

export default Component;
