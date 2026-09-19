import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/p/pkmhe-bhn.css';
import '../../css/o/okpsqnrbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="pkmhe-bhn"/><path class="okpsqnrbl"/></g>`,
		"fallback": "icon-park:two-hands",
	});
}

export default Component;
