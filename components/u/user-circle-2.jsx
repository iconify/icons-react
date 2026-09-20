import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8oo7gb6g.css';
import '../../css/s/sj_zfbclt.css';
import '../../css/v/vl7c_o-va.css';
import '../../css/w/wky5h3byu.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n8oo7gb6g"><path class="sj_zfbclt"/><path class="vl7c_o-va"/><path class="wky5h3byu"/></g>`,
		"fallback": "marketeq:user-circle-2",
	});
}

export default Component;
