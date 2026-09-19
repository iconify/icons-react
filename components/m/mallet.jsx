import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kiz_gfbwv.css';
import '../../css/u/uhsqvfb2c.css';
import '../../css/s/s2_p72bhe.css';
import '../../css/m/meuj3rb7k.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="kiz_gfbwv"/><path class="uhsqvfb2c"/><path clip-rule="evenodd" class="s2_p72bhe"/><path class="meuj3rb7k"/></g>`,
		"fallback": "glyphs-poly:mallet",
	});
}

export default Component;
