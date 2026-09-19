import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/k/kl149rbvc.css';
import '../../css/c/cnrn66j_x.css';
import '../../css/g/gkp1rfbjm.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><circle class="kl149rbvc"/><path class="cnrn66j_x"/><path class="gkp1rfbjm"/></g>`,
		"fallback": "gala:orbit",
	});
}

export default Component;
