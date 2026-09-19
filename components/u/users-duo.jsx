import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ykzy0pbpg.css';
import '../../css/s/seu091v_p.css';
import '../../css/o/o4dbx8u_m.css';
import '../../css/k/ko4cx_iqs.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ykzy0pbpg"/><path class="seu091v_p"/><path class="o4dbx8u_m"/><path class="ko4cx_iqs"/></g>`,
		"fallback": "glyphs:users-duo",
	});
}

export default Component;
