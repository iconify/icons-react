import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxaxxdb7l.css';
import '../../css/x/xyzy_tbmx.css';
import '../../css/q/q56cueczx.css';
import '../../css/d/dg_hh5bhh.css';
import '../../css/k/kroofvbxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxaxxdb7l"/><path class="xyzy_tbmx"/><path class="q56cueczx"/><path class="dg_hh5bhh"/><path class="kroofvbxd"/>`,
		"fallback": "energy-icons:solar-panel-alert-20",
	});
}

export default Component;
