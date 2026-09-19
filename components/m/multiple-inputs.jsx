import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arua2sbkl.css';
import '../../css/n/nnd46w4ky.css';
import '../../css/v/v3g0p6r4z.css';
import '../../css/g/ge49vbb2g.css';
import '../../css/s/s1xnsvbmu.css';
import '../../css/d/dc130cbki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arua2sbkl"/><g class="nnd46w4ky"><path class="v3g0p6r4z"/><path class="ge49vbb2g"/><path class="s1xnsvbmu"/><path class="dc130cbki"/></g>`,
		"fallback": "flat-color-icons:multiple-inputs",
	});
}

export default Component;
