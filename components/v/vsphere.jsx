import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/clwk0tb5w.css';
import '../../css/j/j9lhe6ghc.css';
import '../../css/k/k8hi8zboy.css';
import '../../css/d/dxz0x_bfe.css';
import '../../css/v/vu70-g91b.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clwk0tb5w"/><path class="j9lhe6ghc"/><g class="k8hi8zboy"><path class="dxz0x_bfe"/><path class="vu70-g91b"/></g>`,
		"fallback": "thesvg-color:vsphere",
	});
}

export default Component;
