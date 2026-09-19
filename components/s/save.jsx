import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oc7xiubde.css';
import '../../css/m/m51gvsb7x.css';
import '../../css/h/hjs8s4awd.css';
import '../../css/p/px-qow78k.css';
import '../../css/z/z13-pabfj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oc7xiubde"/><path class="m51gvsb7x"/><path class="hjs8s4awd"/><path class="px-qow78k"/><path class="z13-pabfj"/></g>`,
		"fallback": "glyphs-poly:save",
	});
}

export default Component;
