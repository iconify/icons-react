import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/v/v45bkcq0b.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/d/d4yadoppj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="v45bkcq0b"/><path class="w4vxnac6h"/><path class="d4yadoppj"/></g>`,
		"fallback": "glyphs:pause-circle-duo",
	});
}

export default Component;
