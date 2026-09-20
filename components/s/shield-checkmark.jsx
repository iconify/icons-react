import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/awc_62x-y.css';
import '../../css/p/pm3x4tbgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="awc_62x-y"/><path class="pm3x4tbgk"/></g>`,
		"fallback": "proicons:shield-checkmark",
	});
}

export default Component;
