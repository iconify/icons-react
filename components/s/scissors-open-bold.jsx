import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n3ipoh55s.css';
import '../../css/l/l-9acz8-a.css';
import '../../css/m/mtkygh3tx.css';
import '../../css/z/z5k05abpz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="n3ipoh55s"/><path class="l-9acz8-a"/><path clip-rule="evenodd" class="mtkygh3tx"/><path class="z5k05abpz"/></g>`,
		"fallback": "glyphs:scissors-open-bold",
	});
}

export default Component;
