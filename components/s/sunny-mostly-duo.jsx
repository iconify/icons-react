import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_0ex7y7n.css';
import '../../css/z/zn5wvtzfp.css';
import '../../css/z/zx8orabuq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_0ex7y7n"/><path class="zn5wvtzfp"/><path class="zx8orabuq"/></g>`,
		"fallback": "glyphs:sunny-mostly-duo",
	});
}

export default Component;
