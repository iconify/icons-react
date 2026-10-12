import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf93xsbmn.css';
import '../../css/k/kjf3iqboc.css';
import '../../css/f/fmo52ol9d.css';
import '../../css/t/t2smvv9rt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf93xsbmn"/><path class="kjf3iqboc"/><path class="fmo52ol9d"/><path class="t2smvv9rt"/>`,
		"fallback": "energy-icons:pushpin-48",
	});
}

export default Component;
