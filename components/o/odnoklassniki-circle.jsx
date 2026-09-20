import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzl37klcf.css';
import '../../css/t/tlzl36baj.css';
import '../../css/o/oasgoj2dk.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hzl37klcf"/><path class="tlzl36baj"/><path class="oasgoj2dk"/></g>`,
		"fallback": "jam:odnoklassniki-circle",
	});
}

export default Component;
