import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/z/z1vxq_b_n.css';
import '../../css/f/fezq-xb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="z1vxq_b_n"/><path class="fezq-xb_i"/></g>`,
		"fallback": "iconoir:test-tube-solid",
	});
}

export default Component;
