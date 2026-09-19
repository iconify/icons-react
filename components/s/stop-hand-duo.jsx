import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gbpwkjbhg.css';
import '../../css/z/zl5vibc-e.css';
import '../../css/w/w_zq_p_pm.css';
import '../../css/e/e8-anrbda.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gbpwkjbhg"/><path class="zl5vibc-e"/><path class="w_zq_p_pm"/><path class="e8-anrbda"/></g>`,
		"fallback": "glyphs:stop-hand-duo",
	});
}

export default Component;
