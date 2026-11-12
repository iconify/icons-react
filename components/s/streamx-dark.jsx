import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjsebccxt.css';
import '../../css/z/z5clwdt3a.css';
import '../../css/t/t-sci2y1e.css';
import '../../css/k/ka2boc4gs.css';
import '../../css/l/l2nmuwoec.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjsebccxt"/><path class="z5clwdt3a"/><path class="t-sci2y1e"/><path class="ka2boc4gs"/><path class="l2nmuwoec"/>`,
		"fallback": "selfhst:streamx-dark",
	});
}

export default Component;
