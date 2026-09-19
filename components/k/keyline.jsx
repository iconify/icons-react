import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f57dqmyah.css';
import '../../css/i/i5zmbnb6c.css';
import '../../css/p/pzefh7sbm.css';
import '../../css/a/ai2465scl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f57dqmyah"/><path class="i5zmbnb6c"/><path class="pzefh7sbm"/><path class="ai2465scl"/></g>`,
		"fallback": "icon-park:keyline",
	});
}

export default Component;
