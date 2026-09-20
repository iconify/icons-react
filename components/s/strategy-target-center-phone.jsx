import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njwn1253p.css';
import '../../css/h/hf9tjnbsc.css';
import '../../css/k/k32r8bben.css';
import '../../css/r/r8qe7bldu.css';
import '../../css/z/z7_50-buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="njwn1253p"/><path class="hf9tjnbsc"/><path class="k32r8bben"/><path class="r8qe7bldu"/><path class="z7_50-buj"/></g>`,
		"fallback": "streamline-freehand:strategy-target-center-phone",
	});
}

export default Component;
