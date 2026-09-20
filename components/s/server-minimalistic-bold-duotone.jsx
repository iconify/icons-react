import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjxgzubin.css';
import '../../css/a/awda-kznv.css';
import '../../css/a/axu19ccpr.css';
import '../../css/h/httstt_8v.css';
import '../../css/h/hta7xqm4w.css';
import '../../css/l/l9dbtrbok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjxgzubin"/><path class="awda-kznv"/><path class="axu19ccpr"/><g clip-rule="evenodd" class="httstt_8v"><path class="hta7xqm4w"/><path class="l9dbtrbok"/></g></g>`,
		"fallback": "solar:server-minimalistic-bold-duotone",
	});
}

export default Component;
