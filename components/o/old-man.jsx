import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mw_zx994s.css';
import '../../css/b/b2lbwmbco.css';
import '../../css/f/fvlr6ozns.css';
import '../../css/p/phch2s8_e.css';
import '../../css/p/ps7z7wb7n.css';
import '../../css/j/jho16t1sq.css';
import '../../css/p/pa_yjac-e.css';
import '../../css/x/xssxhhjee.css';
import '../../css/q/qyu3b2bin.css';
import '../../css/d/d5bxcd46z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mw_zx994s"/><path class="b2lbwmbco"/><path class="fvlr6ozns"/><path class="phch2s8_e"/><path class="ps7z7wb7n"/><path class="jho16t1sq"/><path class="pa_yjac-e"/><path class="xssxhhjee"/><path class="qyu3b2bin"/><path class="d5bxcd46z"/></g>`,
		"fallback": "fluent-emoji-flat:old-man",
	});
}

export default Component;
