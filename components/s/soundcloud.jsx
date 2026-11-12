import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbwifro-m.css';
import '../../css/j/jw0j2zbvf.css';
import '../../css/a/ac4vxwops.css';
import '../../css/f/fnrvcab5i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVG5k8qceCK" x1="-3025.8" x2="1391.3" y1="256" y2="256" gradientUnits="userSpaceOnUse"><stop offset="0" class="nbwifro-m"/><stop offset=".713" class="jw0j2zbvf"/><stop offset="1" class="ac4vxwops"/></linearGradient><path fill="url(#SVG5k8qceCK)" class="fnrvcab5i"/>`,
		"fallback": "selfhst:soundcloud",
	});
}

export default Component;
