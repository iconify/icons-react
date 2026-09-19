import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/sk8eslb3l.css';
import '../../css/u/u79z_ybyy.css';
import '../../css/k/kcka1jiyl.css';
import '../../css/v/vks1wx6ok.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="sk8eslb3l"/><path class="u79z_ybyy"/><path class="kcka1jiyl"/><path class="vks1wx6ok"/></g>`,
		"fallback": "icon-park:play-cycle",
	});
}

export default Component;
