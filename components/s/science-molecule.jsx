import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-honm_li.css';
import '../../css/d/dq1ulvyil.css';
import '../../css/o/o8w0orrwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-honm_li"/><path class="dq1ulvyil"/><path class="o8w0orrwc"/></g>`,
		"fallback": "streamline-ultimate:science-molecule",
	});
}

export default Component;
