import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/osuf_jq5d.css';
import '../../css/n/n1rg9dbqj.css';
import '../../css/u/u9mcuywun.css';
import '../../css/m/mmjk66e8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="osuf_jq5d"/><path class="n1rg9dbqj"/><path class="u9mcuywun"/><path class="mmjk66e8m"/></g>`,
		"fallback": "solar:mirror-linear",
	});
}

export default Component;
