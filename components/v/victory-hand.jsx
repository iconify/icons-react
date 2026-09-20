import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z58krdmkt.css';
import '../../css/z/z04drlb1l.css';
import '../../css/o/oz5sbqb2a.css';
import '../../css/g/gf4_6c5ah.css';
import '../../css/l/lid0_4bwf.css';
import '../../css/u/uwt_sxo8b.css';
import '../../css/k/k0wbfvboj.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z58krdmkt"/><g class="z04drlb1l"><path class="oz5sbqb2a"/><path class="gf4_6c5ah"/><path class="lid0_4bwf"/><path class="uwt_sxo8b"/><path class="k0wbfvboj"/></g>`,
		"fallback": "openmoji:victory-hand",
	});
}

export default Component;
