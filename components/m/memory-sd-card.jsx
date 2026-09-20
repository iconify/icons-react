import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/oe5p9oluz.css';
import '../../css/k/kl_0gnbjt.css';
import '../../css/o/omvblxb5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="oe5p9oluz"/><path class="kl_0gnbjt"/><path class="omvblxb5n"/></g>`,
		"fallback": "streamline-freehand-color:memory-sd-card",
	});
}

export default Component;
