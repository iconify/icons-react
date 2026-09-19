import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/di2hvz7gd.css';
import '../../css/t/tmzkqi39i.css';
import '../../css/n/nl0rf7bcu.css';
import '../../css/l/l3mu1cvug.css';
import '../../css/f/fx9qo_wxn.css';
import '../../css/g/gb4u4ya2y.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="di2hvz7gd"/><path class="tmzkqi39i"/><path clip-rule="evenodd" class="nl0rf7bcu"/><path class="l3mu1cvug"/><rect class="fx9qo_wxn"/><rect class="gb4u4ya2y"/></g>`,
		"fallback": "glyphs:scooter-bold",
	});
}

export default Component;
