import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yk_7yjrcr.css';
import '../../css/g/gdzku6bfl.css';
import '../../css/a/a93spj2ll.css';
import '../../css/v/v_rh5jbqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yk_7yjrcr"/><path class="gdzku6bfl"/><path class="a93spj2ll"/><path class="v_rh5jbqz"/></g>`,
		"fallback": "andrsrxn:replay",
	});
}

export default Component;
