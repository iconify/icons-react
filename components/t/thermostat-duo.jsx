import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apafunidj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/q/qlgb7obud.css';
import '../../css/x/xtqu68bem.css';
import '../../css/d/d4tcmzeva.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apafunidj secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="qlgb7obud"/><path class="xtqu68bem"/><path class="d4tcmzeva"/></g>`,
		"fallback": "iconaut:thermostat-duo",
	});
}

export default Component;
