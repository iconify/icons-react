import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idyndeb8p.css';
import '../../css/d/d_mb2abxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idyndeb8p"/><path class="d_mb2abxn"/></g>`,
		"fallback": "reicon:login6",
	});
}

export default Component;
