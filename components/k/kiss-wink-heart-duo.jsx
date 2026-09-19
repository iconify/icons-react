import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/udfbrio3v.css';
import '../../css/u/uf-kssbkg.css';
import '../../css/w/we8zns5ar.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="udfbrio3v"/><path class="uf-kssbkg"/><path class="we8zns5ar"/></g>`,
		"fallback": "glyphs:kiss-wink-heart-duo",
	});
}

export default Component;
