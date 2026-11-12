import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcrl3bcgy.css';
import '../../css/i/iek9glb2w.css';
import '../../css/s/sij7iobyd.css';
import '../../css/r/rjboz-k8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGt7wfBesf" x1="389.8" x2="81.5" y1="426.2" y2="34.2" gradientUnits="userSpaceOnUse"><stop offset="0" class="lcrl3bcgy"/><stop offset="1" class="iek9glb2w"/></linearGradient><path fill="url(#SVGt7wfBesf)" class="sij7iobyd"/><path class="rjboz-k8p"/>`,
		"fallback": "selfhst:mailstore",
	});
}

export default Component;
