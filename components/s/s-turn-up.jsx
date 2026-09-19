import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g995gab3y.css';
import '../../css/p/pkbervbtf.css';
import '../../css/k/kn1zr-vso.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g995gab3y"/><path class="pkbervbtf"/><circle transform="rotate(-180 10 11)" class="kn1zr-vso"/></g>`,
		"fallback": "icon-park-solid:s-turn-up",
	});
}

export default Component;
