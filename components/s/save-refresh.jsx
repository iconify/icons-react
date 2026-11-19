import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv94uo3wq.css';
import '../../css/o/oxfh0-byj.css';
import '../../css/r/r5rvbabsa.css';
import '../../css/z/za8auubyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dv94uo3wq"/><path class="oxfh0-byj"/><path class="r5rvbabsa"/><path class="za8auubyb"/></g>`,
		"fallback": "andrsrxn:save-refresh",
	});
}

export default Component;
