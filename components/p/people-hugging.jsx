import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feoue7bmd.css';
import '../../css/m/muh3a3bep.css';
import '../../css/b/bfulm2bok.css';
import '../../css/q/qy6jgpbir.css';
import '../../css/q/qc7ueqbtp.css';
import '../../css/n/nyvx3bcwj.css';
import '../../css/f/fve1h0qfp.css';
import '../../css/c/cvafufb_g.css';
import '../../css/m/mnobanbyo.css';
import '../../css/j/jsubmkb_x.css';
import '../../css/k/kvi8rhbqx.css';
import '../../css/o/o4w6_4tgg.css';
import '../../css/g/gv0xembuf.css';
import '../../css/y/yqnp17bky.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><radialGradient id="SVGB2kB7sCt" cx=".35" cy=".3" r=".8"><stop offset="0" class="feoue7bmd"/><stop offset="1" class="muh3a3bep"/></radialGradient><radialGradient id="SVGKnakVdcL" cx=".35" cy=".3" r=".8"><stop offset="0" class="bfulm2bok"/><stop offset="1" class="qy6jgpbir"/></radialGradient></defs><g transform="matrix(2.7 0 0 2.7 -12.987 -59.497)"><path fill="url(#SVGKnakVdcL)" class="qc7ueqbtp"/><ellipse fill="url(#SVGKnakVdcL)" transform="rotate(-14 126 72)" class="nyvx3bcwj"/><path fill="url(#SVGB2kB7sCt)" class="fve1h0qfp"/><ellipse fill="url(#SVGB2kB7sCt)" transform="rotate(14 80 78)" class="cvafufb_g"/><path class="mnobanbyo"/><path stroke="url(#SVGKnakVdcL)" class="jsubmkb_x"/><ellipse fill="url(#SVGKnakVdcL)" class="kvi8rhbqx"/><path class="o4w6_4tgg"/><path stroke="url(#SVGB2kB7sCt)" class="gv0xembuf"/><ellipse fill="url(#SVGB2kB7sCt)" class="yqnp17bky"/></g>`,
		"fallback": "xero-emoji:people-hugging",
	});
}

export default Component;
