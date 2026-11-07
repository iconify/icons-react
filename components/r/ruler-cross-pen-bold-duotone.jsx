import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/n7692ibnz.css';
import '../../css/l/lgdn65bch.css';
import '../../css/c/cssvrrbqv.css';
import '../../css/n/ntwwgdbjg.css';
import '../../css/f/fv-0s5beg.css';
import '../../css/r/rj1u-cbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="n7692ibnz"/><path class="lgdn65bch"/><path class="cssvrrbqv"/></g><path class="ntwwgdbjg"/><path class="fv-0s5beg"/><path class="rj1u-cbog"/>`,
		"fallback": "solar:ruler-cross-pen-bold-duotone",
	});
}

export default Component;
