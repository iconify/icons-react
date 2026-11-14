import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sm355blxi.css';
import '../../css/c/cyewjbbxd.css';
import '../../css/h/hglfcybza.css';
import '../../css/f/f3sgcieue.css';
import '../../css/n/nsd2_z-kk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGp95sHdWe" class="sm355blxi"/></defs><path class="cyewjbbxd"/><path class="hglfcybza"/><path class="f3sgcieue"/><path class="nsd2_z-kk"/><filter id="SVG9g0xNcQJ"><feGaussianBlur stdDeviation="1"/></filter><use href="#SVGp95sHdWe" filter="url(#SVG9g0xNcQJ)"/><use href="#SVGp95sHdWe"/>`,
		"fallback": "selfhst:tracearr-dark",
	});
}

export default Component;
