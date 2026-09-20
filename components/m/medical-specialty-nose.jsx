import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s5e42eb_s.css';
import '../../css/m/mtb_r_b3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s5e42eb_s"/><path class="mtb_r_b3m"/></g>`,
		"fallback": "streamline-ultimate:medical-specialty-nose",
	});
}

export default Component;
