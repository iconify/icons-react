import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dl_z_ebww.css';
import '../../css/c/crqtt_qaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dl_z_ebww"/><path class="crqtt_qaa"/></g>`,
		"fallback": "hugeicons:school",
	});
}

export default Component;
