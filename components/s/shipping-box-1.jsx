import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mh390w7cp.css';
import '../../css/h/h63uk2lci.css';
import '../../css/t/t714vtbku.css';
import '../../css/s/sj71gtfbi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mh390w7cp"/><path clip-rule="evenodd" class="h63uk2lci"/><path class="t714vtbku"/><path class="sj71gtfbi"/></g>`,
		"fallback": "streamline-color:shipping-box-1",
	});
}

export default Component;
