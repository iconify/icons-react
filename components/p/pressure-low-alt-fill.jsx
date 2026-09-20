import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_nyj5beu.css';
import '../../css/h/hwnz52b0q.css';
import '../../css/q/q700p9b8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGIh3X4d1V" x1="184.3" x2="275.4" y1="192.2" y2="349.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="k_nyj5beu"/><stop offset=".5" class="k_nyj5beu"/><stop offset="1" class="hwnz52b0q"/></linearGradient></defs><path fill="url(#SVGIh3X4d1V)" class="q700p9b8s"/>`,
		"fallback": "meteocons:pressure-low-alt-fill",
	});
}

export default Component;
