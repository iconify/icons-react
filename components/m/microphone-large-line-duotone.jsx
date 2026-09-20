import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vea8iybjt.css';
import '../../css/k/ki00rvofo.css';
import '../../css/v/v4sczhx0t.css';
import '../../css/z/zoz248zcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vea8iybjt"/><path class="ki00rvofo"/><path class="v4sczhx0t"/><path class="zoz248zcv"/></g>`,
		"fallback": "solar:microphone-large-line-duotone",
	});
}

export default Component;
