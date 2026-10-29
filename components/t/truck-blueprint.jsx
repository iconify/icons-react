import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ek9bm-fbg.css';
import '../../css/i/iu3wagcep.css';
import '../../css/s/sdt8tgbql.css';
import '../../css/c/cgcnbnl-h.css';
import '../../css/c/cuurlwsmo.css';
import '../../css/k/ky4nhac2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ek9bm-fbg wm-deco"/><path class="iu3wagcep wm-deco"/><path class="sdt8tgbql wm-deco"/><path class="cgcnbnl-h wm-k"/><path class="cuurlwsmo wm-a"/><path class="ky4nhac2h wm-k"/></g>`,
		"fallback": "withicons:truck-blueprint",
	});
}

export default Component;
