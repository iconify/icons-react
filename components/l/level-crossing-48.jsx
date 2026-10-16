import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/detgaacqd.css';
import '../../css/j/j0yefd1fo.css';
import '../../css/h/hp7pi0p4r.css';
import '../../css/l/lbljyc_gg.css';
import '../../css/f/fcluyzogb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="detgaacqd"/><path class="j0yefd1fo"/><path class="hp7pi0p4r"/><path class="lbljyc_gg"/><path class="fcluyzogb"/>`,
		"fallback": "energy-icons:level-crossing-48",
	});
}

export default Component;
