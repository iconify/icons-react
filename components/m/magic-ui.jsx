import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncgyz98gh.css';
import '../../css/b/bvkqv7uvt.css';
import '../../css/j/jiy1guboa.css';
import '../../css/n/n-dutubuh.css';
import '../../css/h/hvi_7s15a.css';
import '../../css/s/s--sdzg-a.css';
import '../../css/o/o8t913b_m.css';
import '../../css/m/m3_mcuvco.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect fill="url(#SVGgOw9he6f)" class="ncgyz98gh"/><rect fill="url(#SVGOeiTYKaQ)" class="ncgyz98gh"/><path class="bvkqv7uvt"/><defs><linearGradient id="SVGgOw9he6f" x1="128" x2="128" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="jiy1guboa"/><stop offset="1" class="n-dutubuh"/></linearGradient><linearGradient id="SVGOeiTYKaQ" x1="78" x2="236" y1="0" y2="256" gradientUnits="userSpaceOnUse"><stop class="hvi_7s15a"/><stop offset=".333" class="s--sdzg-a"/><stop offset=".667" class="o8t913b_m"/><stop offset="1" class="m3_mcuvco"/></linearGradient></defs></g>`,
		"fallback": "thesvg-color:magic-ui",
	});
}

export default Component;
