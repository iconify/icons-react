import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/osjc_s7am.css';
import '../../css/l/l_1sesbbk.css';
import '../../css/s/seo7wx-_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="osjc_s7am"/><path class="l_1sesbbk"/><path class="seo7wx-_r"/></g>`,
		"fallback": "hugeicons:radial",
	});
}

export default Component;
