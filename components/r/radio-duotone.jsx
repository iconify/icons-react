import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hd4pobbto.css';
import '../../css/d/dk5iih4zr.css';
import '../../css/z/zyu0detlv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hd4pobbto"/><path class="dk5iih4zr"/><path clip-rule="evenodd" class="zyu0detlv"/></g>`,
		"fallback": "keyline-icons:radio-duotone",
	});
}

export default Component;
