import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqsny_bib.css';
import '../../css/b/b14jacbag.css';
import '../../css/v/vlpjmacdk.css';
import '../../css/p/pz5dn8bel.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mqsny_bib"/><path class="b14jacbag"/><path clip-rule="evenodd" class="vlpjmacdk"/><path class="pz5dn8bel"/></g>`,
		"fallback": "glyphs:sort-amount-up-outline",
	});
}

export default Component;
