import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/e/emtp8acgv.css';
import '../../css/c/c16277njf.css';
import '../../css/b/b5y33hd6m.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="emtp8acgv"/><path class="c16277njf"/><path class="b5y33hd6m"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "streamline-stickies-color:safety-duo",
	});
}

export default Component;
