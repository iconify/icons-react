import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hu0864bjy.css';
import '../../css/o/o-jk2xaue.css';
import '../../css/w/wg2oucbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="hu0864bjy"/><path class="o-jk2xaue wm-k"/><path class="wg2oucbbj wm-a"/></g>`,
		"fallback": "withicons:microwave-sketch",
	});
}

export default Component;
