import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww_dny5rn.css';
import '../../css/m/m0kdcfbke.css';
import '../../css/f/fa_48euey.css';
import '../../css/y/y66ewlbak.css';
import '../../css/m/mr6vmhblg.css';
import '../../css/m/m-wbo0bmw.css';
import '../../css/c/c1uo6ab4p.css';
import '../../css/r/rigrabbjo.css';
import '../../css/u/uhisegbzy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww_dny5rn"/><path class="m0kdcfbke"/><path class="fa_48euey"/><path class="y66ewlbak"/><path class="mr6vmhblg"/><path class="m-wbo0bmw"/><path class="c1uo6ab4p"/><path class="rigrabbjo"/><path class="uhisegbzy"/>`,
		"fallback": "fxemoji:lightrail",
	});
}

export default Component;
