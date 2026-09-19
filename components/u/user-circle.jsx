import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/snm_llb0d.css';
import '../../css/k/k3tk-pelt.css';
import '../../css/v/v3nqtefag.css';
import '../../css/d/dddk1uvez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="snm_llb0d"/><path class="k3tk-pelt"/><path clip-rule="evenodd" class="v3nqtefag"/><path class="dddk1uvez"/></g>`,
		"fallback": "glyphs-poly:user-circle",
	});
}

export default Component;
