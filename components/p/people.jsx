import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/k1r1gubki.css';
import '../../css/b/bp3h3heqa.css';
import '../../css/c/cj_0qhb1y.css';
import '../../css/f/fpwh461jy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="k1r1gubki"/><path class="bp3h3heqa"/><path class="cj_0qhb1y"/><path class="fpwh461jy"/></g>`,
		"fallback": "pepicons-pencil:people",
	});
}

export default Component;
