import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cb8sfdc_g.css';
import '../../css/n/njg0o2b3b.css';
import '../../css/k/kjwajrycf.css';
import '../../css/f/fokxt-bfd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cb8sfdc_g"/><path class="njg0o2b3b"/><path class="kjwajrycf"/><path class="fokxt-bfd"/></g>`,
		"fallback": "streamline-flex-color:iphone",
	});
}

export default Component;
