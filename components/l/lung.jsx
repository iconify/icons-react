import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tgrps68dr.css';
import '../../css/h/huuw0vbsq.css';
import '../../css/a/arksiccll.css';
import '../../css/p/p_-qqou4p.css';
import '../../css/g/g_33q6_ne.css';
import '../../css/v/v1130pb6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tgrps68dr"><path class="huuw0vbsq"/><path class="arksiccll"/><path class="p_-qqou4p"/><path class="g_33q6_ne"/><path class="v1130pb6a"/></g>`,
		"fallback": "icon-park:lung",
	});
}

export default Component;
