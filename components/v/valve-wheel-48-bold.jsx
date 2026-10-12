import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqr8yp28h.css';
import '../../css/b/blas98ktz.css';
import '../../css/m/mbe4uxbkg.css';
import '../../css/w/wrnacwbkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqr8yp28h"/><path class="blas98ktz"/><path class="mbe4uxbkg"/><path class="wrnacwbkm"/>`,
		"fallback": "energy-icons:valve-wheel-48-bold",
	});
}

export default Component;
