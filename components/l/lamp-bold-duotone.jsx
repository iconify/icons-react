import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wru2n0bcc.css';
import '../../css/r/r25dsl2cl.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vrpmv5bjw.css';
import '../../css/h/hgqe7ndyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wru2n0bcc"/><path class="r25dsl2cl"/><g class="xtpeb-edw"><path class="vrpmv5bjw"/><path class="hgqe7ndyk"/></g>`,
		"fallback": "solar:lamp-bold-duotone",
	});
}

export default Component;
