import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/q/qxe-g7bgd.css';
import '../../css/c/cgt_ecp0k.css';
import '../../css/h/hnhc6-bsy.css';
import '../../css/e/exuyzw26p.css';
import '../../css/m/m0j6vkbqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="y6f0jibvm"/><path class="qxe-g7bgd"/><path class="cgt_ecp0k"/><path class="hnhc6-bsy"/><path class="exuyzw26p"/><path class="m0j6vkbqf"/></g>`,
		"fallback": "icon-park:voice-one",
	});
}

export default Component;
