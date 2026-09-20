import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spikp7boj.css';
import '../../css/m/mxutx8bjy.css';
import '../../css/p/pvcdc057u.css';
import '../../css/m/m49a1tu-b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spikp7boj"/><path class="mxutx8bjy"/><path class="pvcdc057u"/><path class="m49a1tu-b"/>`,
		"fallback": "selfhst:roundcube",
	});
}

export default Component;
