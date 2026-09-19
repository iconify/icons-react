import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhsrn1yyz.css';
import '../../css/j/jro2vlvum.css';
import '../../css/y/y0id5tbpn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhsrn1yyz"/><path class="jro2vlvum"/><path class="y0id5tbpn"/>`,
		"fallback": "heroicons:truck-16-solid",
	});
}

export default Component;
