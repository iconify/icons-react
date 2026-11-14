import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/n/nrc716bdu.css';
import '../../css/z/zwkthccfd.css';
import '../../css/f/f_p4vo7wn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="nrc716bdu"/><path class="zwkthccfd"/><path class="f_p4vo7wn"/></g>`,
		"fallback": "hugeicons:reverse-withdrawal-01",
	});
}

export default Component;
