import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/lck5n2bzo.css';
import '../../css/m/mcr0ovfxm.css';
import '../../css/k/k59midc1v.css';
import '../../css/n/ny0_0mbce.css';
import '../../css/u/uwbh46bde.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="lck5n2bzo"/><path class="mcr0ovfxm"/><path class="k59midc1v"/><path class="ny0_0mbce"/><path class="uwbh46bde"/></g>`,
		"fallback": "pepicons-pencil:swords",
	});
}

export default Component;
