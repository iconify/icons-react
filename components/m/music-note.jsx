import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/f/fg7b3kb3a.css';
import '../../css/t/t0m0k5svp.css';
import '../../css/g/gu96anbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="fg7b3kb3a"/><path class="t0m0k5svp"/><path class="gu96anbik"/></g>`,
		"fallback": "akar-icons:music-note",
	});
}

export default Component;
