import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/u/umd3ehbxn.css';
import '../../css/e/e2931bbuh.css';
import '../../css/p/ph-3gubvz.css';
import '../../css/y/ym44z-brb.css';
import '../../css/s/suc51uaxw.css';
import '../../css/u/usqk-8b4h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><ellipse class="umd3ehbxn"/><ellipse transform="rotate(15 16.933 24.64)" class="e2931bbuh"/><ellipse transform="scale(-1 1)rotate(15 -109.047 -105.16)" class="ph-3gubvz"/><path class="ym44z-brb"/><path class="suc51uaxw"/><path class="usqk-8b4h"/></g>`,
		"fallback": "icon-park:panda",
	});
}

export default Component;
