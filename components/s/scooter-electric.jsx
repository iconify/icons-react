import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ezgrq_b8g.css';
import '../../css/o/ozw_qtvty.css';
import '../../css/e/emhb2rakv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="ezgrq_b8g"/><circle class="ozw_qtvty"/><path class="emhb2rakv"/></g>`,
		"fallback": "hugeicons:scooter-electric",
	});
}

export default Component;
