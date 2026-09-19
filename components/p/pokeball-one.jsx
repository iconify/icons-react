import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cnp73_ylh.css';
import '../../css/r/rfsvcqblw.css';
import '../../css/z/zwzflvbzy.css';
import '../../css/t/tbfjszvql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cnp73_ylh"/><circle class="rfsvcqblw"/><path class="zwzflvbzy"/><circle class="tbfjszvql"/></g>`,
		"fallback": "icon-park-outline:pokeball-one",
	});
}

export default Component;
