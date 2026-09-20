import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zwowgwa1j.css';
import '../../css/q/q4802bb6x.css';
import '../../css/s/sro7nv68c.css';
import '../../css/p/pkck6zbrt.css';
import '../../css/e/ehk36dbwr.css';
import '../../css/h/hie20wbxy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zwowgwa1j"/><path class="q4802bb6x"/><path class="sro7nv68c"/><path class="pkck6zbrt"/><path class="ehk36dbwr"/><path class="hie20wbxy"/></g>`,
		"fallback": "streamline-flex-color:rocket",
	});
}

export default Component;
