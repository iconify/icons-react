import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mikvgmbwr.css';
import '../../css/x/x2fx8vb2p.css';
import '../../css/e/e5rhf-ewl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mikvgmbwr"/><path class="x2fx8vb2p"/><path class="e5rhf-ewl"/>`,
		"fallback": "energy-icons:tidal-lagoon-20",
	});
}

export default Component;
