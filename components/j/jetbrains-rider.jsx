import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gze0ohbmc.css';
import '../../css/l/li_ovhbqw.css';
import '../../css/r/r_lf9ybqi.css';
import '../../css/h/hhzz_ccpc.css';
import '../../css/v/v95-ysbjn.css';
import '../../css/m/meydqvb2p.css';
import '../../css/v/vofls9_cw.css';
import '../../css/n/nimdl8bcg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGyrbymd8I" x1="90.8%" x2="-19.1%" y1="81.8%" y2="19%"><stop offset="0%" class="gze0ohbmc"/><stop offset="48%" class="gze0ohbmc"/><stop offset="94%" class="li_ovhbqw"/></linearGradient><linearGradient id="SVGaOgnjeKW" x1="36%" x2="53.7%" y1="7.3%" y2="93%"><stop offset="14%" class="r_lf9ybqi"/><stop offset="48%" class="gze0ohbmc"/><stop offset="96%" class="r_lf9ybqi"/></linearGradient><linearGradient id="SVGFnCBkd3t" x1="39.5%" x2="56.9%" y1="11.4%" y2="91.7%"><stop offset="28%" class="gze0ohbmc"/><stop offset="97%" class="li_ovhbqw"/></linearGradient></defs><path fill="url(#SVGyrbymd8I)" class="hhzz_ccpc"/><path fill="url(#SVGaOgnjeKW)" class="v95-ysbjn"/><path fill="url(#SVGFnCBkd3t)" class="meydqvb2p"/><path class="vofls9_cw"/><path class="nimdl8bcg"/>`,
		"fallback": "thesvg-color:jetbrains-rider",
	});
}

export default Component;
