import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex1di-nuw.css';
import '../../css/s/sezz9mljn.css';
import '../../css/j/jt2vpcbed.css';
import '../../css/t/ttgf-0n_h.css';
import '../../css/h/hm1cdtblp.css';
import '../../css/s/sxnf6idlq.css';
import '../../css/u/u_gltbukg.css';
import '../../css/t/tk2tvmb3l.css';
import '../../css/c/c5m9vcbrc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex1di-nuw"/><path class="sezz9mljn"/><path class="jt2vpcbed"/><path class="ttgf-0n_h"/><path class="hm1cdtblp"/><path class="sxnf6idlq"/><path class="u_gltbukg"/><path class="tk2tvmb3l"/><path class="c5m9vcbrc"/>`,
		"fallback": "openmoji:pill",
	});
}

export default Component;
