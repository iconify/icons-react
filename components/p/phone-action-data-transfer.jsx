import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vhac_htme.css';
import '../../css/v/v_p_w_bzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vhac_htme"/><path class="v_p_w_bzt"/></g>`,
		"fallback": "streamline-ultimate:phone-action-data-transfer",
	});
}

export default Component;
