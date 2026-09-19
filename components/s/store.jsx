import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcqw5_n6v.css';
import '../../css/a/ajgo2cucn.css';
import '../../css/x/x406fxb-a.css';
import '../../css/e/e7o8ilbbs.css';
import '../../css/w/wbw8jccez.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcqw5_n6v"/><path clip-rule="evenodd" class="ajgo2cucn"/><path class="x406fxb-a"/><path clip-rule="evenodd" class="e7o8ilbbs"/><path class="wbw8jccez"/></g>`,
		"fallback": "glyphs-poly:store",
	});
}

export default Component;
