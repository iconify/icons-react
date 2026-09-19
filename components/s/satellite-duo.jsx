import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzz7smhdu.css';
import '../../css/v/v_ctii0wf.css';
import '../../css/l/lgngwe9qv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lzz7smhdu"/><path class="v_ctii0wf"/><path class="lgngwe9qv"/></g>`,
		"fallback": "glyphs:satellite-duo",
	});
}

export default Component;
