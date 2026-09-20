import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hfn0eod3i.css';
import '../../css/b/bne_g12ej.css';
import '../../css/l/l44alrbhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hfn0eod3i"/><path class="bne_g12ej"/><path class="l44alrbhn"/></g>`,
		"fallback": "streamline-freehand:newspaper-fold",
	});
}

export default Component;
