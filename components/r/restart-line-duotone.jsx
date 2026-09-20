import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p63g3mbxh.css';
import '../../css/l/lqdncdb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p63g3mbxh"/><path class="lqdncdb1y"/></g>`,
		"fallback": "solar:restart-line-duotone",
	});
}

export default Component;
