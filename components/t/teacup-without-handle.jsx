import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un-n3-b_f.css';
import '../../css/v/va_rctb0l.css';
import '../../css/a/a1bbkcckl.css';
import '../../css/y/ymu3v06_c.css';
import '../../css/d/d7o_noino.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="un-n3-b_f"/><path class="va_rctb0l"/><path class="a1bbkcckl"/><path class="ymu3v06_c"/><path class="d7o_noino"/></g>`,
		"fallback": "fluent-emoji-flat:teacup-without-handle",
	});
}

export default Component;
