import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q2fcctxvx.css';
import '../../css/o/oiytrebzc.css';
import '../../css/z/z1srs-9rs.css';
import '../../css/i/irkglzlhc.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="q2fcctxvx"/><path class="oiytrebzc"/><path class="z1srs-9rs"/><path class="irkglzlhc"/></g>`,
		"fallback": "flagpack:ly",
	});
}

export default Component;
