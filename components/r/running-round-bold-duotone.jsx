import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lezjbfb4s.css';
import '../../css/m/mauff2bjr.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/v/vi2_iacgi.css';
import '../../css/n/n3ijr1bwe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lezjbfb4s"/><path clip-rule="evenodd" class="mauff2bjr"/><g class="xtpeb-edw"><path class="vi2_iacgi"/><path class="n3ijr1bwe"/></g>`,
		"fallback": "solar:running-round-bold-duotone",
	});
}

export default Component;
