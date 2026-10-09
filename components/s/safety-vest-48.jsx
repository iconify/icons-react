import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svbqxwb3h.css';
import '../../css/x/x2jvtbbvl.css';
import '../../css/h/hp7pi0p4r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svbqxwb3h"/><path class="x2jvtbbvl"/><path class="hp7pi0p4r"/>`,
		"fallback": "energy-icons:safety-vest-48",
	});
}

export default Component;
