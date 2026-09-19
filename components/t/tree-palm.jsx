import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sad1i4_or.css';
import '../../css/o/o2fo5mb_f.css';
import '../../css/e/eb0q3sbid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sad1i4_or"/><path class="o2fo5mb_f"/><path class="eb0q3sbid"/></g>`,
		"fallback": "hugeicons:tree-palm",
	});
}

export default Component;
