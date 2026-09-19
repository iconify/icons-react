import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oppy2vb2o.css';
import '../../css/k/kvl2zqb5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oppy2vb2o"/><path class="kvl2zqb5m"/></g>`,
		"fallback": "hugeicons:voice-comment",
	});
}

export default Component;
