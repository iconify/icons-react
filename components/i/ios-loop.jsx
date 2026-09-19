import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfj_ec0cs.css';
import '../../css/j/jz2nnzb1g.css';
import '../../css/p/puzcifo1g.css';
import '../../css/z/zzrsoebtg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfj_ec0cs"/><path class="jz2nnzb1g"/><path class="puzcifo1g"/><path class="zzrsoebtg"/>`,
		"fallback": "ion:ios-loop",
	});
}

export default Component;
