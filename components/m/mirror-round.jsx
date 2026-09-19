import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yzthyp46v.css';
import '../../css/g/gg4qvbbfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yzthyp46v"/><circle class="gg4qvbbfp"/></g>`,
		"fallback": "hugeicons:mirror-round",
	});
}

export default Component;
