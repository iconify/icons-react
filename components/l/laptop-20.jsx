import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r--0b1hmi.css';
import '../../css/x/xzl--067h.css';
import '../../css/w/wdmk6d5tn.css';
import '../../css/m/m9uh0gbex.css';
import '../../css/y/y7pmx_bqz.css';
import '../../css/i/ikgnddbmo.css';
import '../../css/b/b90ceybhx.css';
import '../../css/u/ufj74pa-q.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path fill="url(#SVGCdZMmdfr)" class="r--0b1hmi"/><path fill="url(#SVGnfNcpd0O)" class="xzl--067h"/><path fill="url(#SVGEmSuzdSI)" class="wdmk6d5tn"/><defs><linearGradient id="SVGCdZMmdfr" x1="18" x2="17.197" y1="15.976" y2="11.158" gradientUnits="userSpaceOnUse"><stop class="m9uh0gbex"/><stop offset="1" class="y7pmx_bqz"/></linearGradient><linearGradient id="SVGnfNcpd0O" x1="18" x2="17.884" y1="15.929" y2="14.079" gradientUnits="userSpaceOnUse"><stop class="y7pmx_bqz"/><stop offset="1" class="ikgnddbmo"/></linearGradient><linearGradient id="SVGEmSuzdSI" x1="12.8" x2="13.282" y1="5" y2="15.299" gradientUnits="userSpaceOnUse"><stop class="b90ceybhx"/><stop offset="1" class="ufj74pa-q"/></linearGradient></defs></g>`,
		"fallback": "fluent-color:laptop-20",
	});
}

export default Component;
