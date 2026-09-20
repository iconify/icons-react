import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/avzl98b-s.css';
import '../../css/z/z__g5t12m.css';
import '../../css/k/ky0k78gvx.css';
import '../../css/v/vnsop5_4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="avzl98b-s"/><path class="z__g5t12m"/><path class="ky0k78gvx"/><path class="vnsop5_4w"/></g>`,
		"fallback": "solar:video-library-linear",
	});
}

export default Component;
