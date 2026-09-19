import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yjy_lob3u.css';
import '../../css/o/ooks3obcj.css';
import '../../css/s/sk8kac_qm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yjy_lob3u"/><path class="ooks3obcj"/><path class="sk8kac_qm"/></g>`,
		"fallback": "hugeicons:napkins-01",
	});
}

export default Component;
