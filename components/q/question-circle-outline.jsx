import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_dvue1n.css';
import '../../css/t/ts_bt_bky.css';
import '../../css/d/du6sep0xm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt_dvue1n"/><path class="ts_bt_bky"/><path clip-rule="evenodd" class="du6sep0xm"/>`,
		"fallback": "solar:question-circle-outline",
	});
}

export default Component;
