import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g853k9bhz.css';
import '../../css/d/dn9ejacmb.css';
import '../../css/b/bv275hb_v.css';
import '../../css/c/cdxfhdbni.css';
import '../../css/n/ndcuwebrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g853k9bhz"/><path class="dn9ejacmb"/><path class="bv275hb_v"/><path class="cdxfhdbni"/><path class="ndcuwebrz"/></g>`,
		"fallback": "lucide-extended:park-duotone",
	});
}

export default Component;
