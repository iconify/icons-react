import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oasgoj2dk.css';
import '../../css/x/xsz512blo.css';
import '../../css/g/ggcis_6me.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oasgoj2dk"/><path class="xsz512blo"/><path class="ggcis_6me"/></g>`,
		"fallback": "jam:stackoverflow-circle",
	});
}

export default Component;
