import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m8-7_wznb.css';
import '../../css/o/ookt36b8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m8-7_wznb"/><path class="ookt36b8p"/></g>`,
		"fallback": "solar:notebook-minimalistic-line-duotone",
	});
}

export default Component;
