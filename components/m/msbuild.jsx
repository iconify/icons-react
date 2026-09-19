import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fs2wk-bqh.css';
import '../../css/d/dbupqnjzh.css';
import '../../css/k/kfeno0aoe.css';
import '../../css/i/inrqj_bux.css';
import '../../css/t/tv63mtjzt.css';
import '../../css/p/pkea_jrww.css';
import '../../css/e/entsu9bxm.css';
import '../../css/m/m2spup3to.css';
import '../../css/h/hly-9smum.css';
import '../../css/e/ef7wid04m.css';
import '../../css/p/phu87nbjl.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fs2wk-bqh"/><path fill="url(#SVGe25WAcoz)" class="dbupqnjzh"/><path fill="url(#SVGZyAxOekZ)" class="kfeno0aoe"/><path class="inrqj_bux"/><path fill="url(#SVGJHbHcdqj)" class="tv63mtjzt"/><defs><linearGradient id="SVGe25WAcoz" x1="48" x2="48" y1="30.82" y2="107.12" gradientUnits="userSpaceOnUse"><stop class="pkea_jrww"/><stop offset="1" class="entsu9bxm"/></linearGradient><linearGradient id="SVGZyAxOekZ" x1="67.95" x2="32.64" y1="5.33" y2="49.6" gradientUnits="userSpaceOnUse"><stop class="m2spup3to"/><stop offset="1" class="hly-9smum"/></linearGradient><linearGradient id="SVGJHbHcdqj" x1="117.34" x2="26.49" y1="116" y2="116" gradientUnits="userSpaceOnUse"><stop offset=".39" class="ef7wid04m"/><stop offset="1" class="phu87nbjl"/></linearGradient></defs>`,
		"fallback": "devicon:msbuild",
	});
}

export default Component;
