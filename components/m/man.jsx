import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm2f6m50i.css';
import '../../css/u/ur2dqubrf.css';
import '../../css/g/gn22t04kr.css';
import '../../css/z/zepskkb7t.css';
import '../../css/n/nqjaz5b0x.css';
import '../../css/h/h6p5tpnlv.css';
import '../../css/v/v568ejbqc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm2f6m50i"/><path class="ur2dqubrf"/><path class="gn22t04kr"/><path class="zepskkb7t"/><path class="nqjaz5b0x"/><path class="h6p5tpnlv"/><path class="v568ejbqc"/>`,
		"fallback": "fxemoji:man",
	});
}

export default Component;
