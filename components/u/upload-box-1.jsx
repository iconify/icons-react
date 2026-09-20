import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_4ft4b5o.css';
import '../../css/j/jnhrwaczb.css';
import '../../css/r/r_tpkwc8v.css';
import '../../css/l/l_2i6leyu.css';
import '../../css/m/mwwopca2t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o_4ft4b5o"/><path class="jnhrwaczb"/><path class="r_tpkwc8v"/><path class="l_2i6leyu"/><path class="mwwopca2t"/></g>`,
		"fallback": "streamline-color:upload-box-1",
	});
}

export default Component;
