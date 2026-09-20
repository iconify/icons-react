import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyt2l_voi.css';
import '../../css/y/yn6p1eb0k.css';
import '../../css/u/u5s7reayv.css';
import '../../css/c/c41e271zx.css';
import '../../css/c/cqchpb_dl.css';
import '../../css/h/hzhb0bcwn.css';
import '../../css/m/mal5nabbb.css';
import '../../css/x/x5fyvquan.css';
import '../../css/u/ukzwolvdp.css';
import '../../css/v/vzooosfab.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="tyt2l_voi"/><path class="yn6p1eb0k"/><circle class="u5s7reayv"/><circle class="c41e271zx"/><path class="cqchpb_dl"/><g class="hzhb0bcwn"><circle class="mal5nabbb"/><circle class="x5fyvquan"/><circle class="ukzwolvdp"/><circle class="vzooosfab"/></g>`,
		"fallback": "openmoji:nazar-amulet",
	});
}

export default Component;
