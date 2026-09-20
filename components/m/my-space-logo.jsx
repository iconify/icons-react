import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o9jd0pibz.css';
import '../../css/l/lskd4ab3l.css';
import '../../css/d/dgoec6lpu.css';
import '../../css/y/ynscaskmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="o9jd0pibz"/><path class="lskd4ab3l"/><path class="dgoec6lpu"/><path class="ynscaskmd"/></g>`,
		"fallback": "streamline-logos:my-space-logo",
	});
}

export default Component;
