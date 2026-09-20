import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/piqghlb6x.css';
import '../../css/t/tpdab-bbn.css';
import '../../css/s/spjv_dz3f.css';
import '../../css/m/mhgcl3bqz.css';
import '../../css/i/i72psgb8a.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGw9scfcdR)" class="piqghlb6x"><path class="tpdab-bbn"/><path class="spjv_dz3f"/><path class="mhgcl3bqz"/></g><defs><clipPath id="SVGw9scfcdR"><path class="i72psgb8a"/></clipPath></defs></g>`,
		"fallback": "streamline-stickies-color:wand-duo",
	});
}

export default Component;
