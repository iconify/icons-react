import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uad642uxz.css';
import '../../css/d/d0s93ub4a.css';
import '../../css/f/fr9zekb-q.css';
import '../../css/u/u3u_1-bsx.css';
import '../../css/o/o2r1h9nmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uad642uxz"/><path class="d0s93ub4a"/><path class="fr9zekb-q"/><path class="u3u_1-bsx"/><path class="o2r1h9nmm"/>`,
		"fallback": "energy-icons:tree-planting-48",
	});
}

export default Component;
