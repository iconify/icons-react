import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nka10dbuy.css';
import '../../css/j/jjad_uqvt.css';
import '../../css/a/avokf88mz.css';
import '../../css/p/pmu0y3bya.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nka10dbuy"/><path class="jjad_uqvt"/><path class="avokf88mz"/><path class="pmu0y3bya"/>`,
		"fallback": "fxemoji:lowerleftcrayon",
	});
}

export default Component;
