import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-3n4tbkv.css';
import '../../css/h/htf9mo5im.css';
import '../../css/a/aeqfr4vbi.css';
import '../../css/p/p9_zic3jl.css';
import '../../css/d/dqiqyxalr.css';
import '../../css/b/bfxy05bvr.css';
import '../../css/n/nb4051b4f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-3n4tbkv"/><path class="htf9mo5im"/><path class="aeqfr4vbi"/><path class="p9_zic3jl"/><path class="dqiqyxalr"/><path class="bfxy05bvr"/><path class="nb4051b4f"/>`,
		"fallback": "cil:qr-code",
	});
}

export default Component;
