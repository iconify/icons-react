import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ujr860b1o.css';
import '../../css/a/adqy_2bos.css';
import '../../css/h/huvi0vdtx.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ujr860b1o"/><path class="adqy_2bos"/><path class="huvi0vdtx"/><path class="ncb20ka2n"/></g>`,
		"fallback": "solar:sofa-2-linear",
	});
}

export default Component;
