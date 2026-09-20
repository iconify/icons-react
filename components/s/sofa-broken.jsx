import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aiu2dac3q.css';
import '../../css/k/kpcjxbbzl.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="aiu2dac3q"/><path class="kpcjxbbzl"/><path class="ncb20ka2n"/></g>`,
		"fallback": "solar:sofa-broken",
	});
}

export default Component;
