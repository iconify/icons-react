import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/ijp7_ttxp.css';
import '../../css/t/t382i1b8h.css';
import '../../css/e/eqxd83_dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ijp7_ttxp"/><circle class="t382i1b8h"/><path class="eqxd83_dz"/></g>`,
		"fallback": "hugeicons:user-id-verification",
	});
}

export default Component;
