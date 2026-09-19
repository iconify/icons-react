import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd6hrr99d.css';
import '../../css/l/lfl9_1bnq.css';
import '../../css/c/ccx719b2a.css';
import '../../css/f/fjimhl__y.css';
import '../../css/b/bak3ubkek.css';
import '../../css/y/ycn92kbmn.css';
import '../../css/v/vd-rd1bam.css';
import '../../css/q/qtk4hkbsm.css';
import '../../css/r/rlnkgbc3o.css';
import '../../css/a/akddflkon.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zd6hrr99d"/><path class="lfl9_1bnq"/><path class="ccx719b2a"/><path class="fjimhl__y"/><path class="bak3ubkek"/><path class="ycn92kbmn"/><path class="vd-rd1bam"/><path class="qtk4hkbsm"/><path class="rlnkgbc3o"/><path class="akddflkon"/></g>`,
		"fallback": "fluent-emoji-flat:person-in-bed",
	});
}

export default Component;
