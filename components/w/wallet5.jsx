import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pvl6bvbyg.css';
import '../../css/u/uu4o2hbdh.css';
import '../../css/a/aty_qzhdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pvl6bvbyg"/><path class="uu4o2hbdh"/><path class="aty_qzhdh"/></g>`,
		"fallback": "reicon:wallet5",
	});
}

export default Component;
