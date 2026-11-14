import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pude0_byr.css';
import '../../css/w/we_dlvbnd.css';
import '../../css/q/qs2blf87w.css';
import '../../css/v/viq6kcbcb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pude0_byr"/><circle class="we_dlvbnd"/><circle class="qs2blf87w"/><circle class="viq6kcbcb"/></g>`,
		"fallback": "evicons:plug-cee-blue",
	});
}

export default Component;
