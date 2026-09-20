import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhrly3bdd.css';
import '../../css/k/kvlrl-m0z.css';
import '../../css/x/xobvij4rc.css';
import '../../css/j/jsuj6mb0s.css';
import '../../css/x/xjhrzz_pj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhrly3bdd"/><path class="kvlrl-m0z"/><path class="xobvij4rc"/><path class="jsuj6mb0s"/><path class="xjhrzz_pj"/>`,
		"fallback": "selfhst:macrumors",
	});
}

export default Component;
