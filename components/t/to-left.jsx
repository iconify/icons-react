import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/c/c22madzjd.css';
import '../../css/n/n_d7l62sc.css';
import '../../css/s/seb58jbrz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="c22madzjd"/><path class="n_d7l62sc"/><path class="seb58jbrz"/></g>`,
		"fallback": "icon-park:to-left",
	});
}

export default Component;
