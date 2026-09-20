import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sczr2xbqg.css';
import '../../css/i/i10xy6qnx.css';
import '../../css/o/o8759zbec.css';
import '../../css/z/zcuu_ry_o.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vbfap3bmb.css';
import '../../css/k/ko8a0qb1n.css';
import '../../css/t/ttd7ih_xv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sczr2xbqg"/><path class="i10xy6qnx"/><circle class="o8759zbec"/><path class="zcuu_ry_o"/><g class="jn8qy4bru"><path class="vbfap3bmb"/><circle class="ko8a0qb1n"/><path class="ttd7ih_xv"/></g>`,
		"fallback": "openmoji:trackball",
	});
}

export default Component;
