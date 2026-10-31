import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iv0i5uk2c.css';
import '../../css/k/k1r99mbvw.css';
import '../../css/p/pt9o2mr1h.css';
import '../../css/i/inrxyjbem.css';
import '../../css/c/ckn517gcp.css';
import '../../css/k/knsr51bbj.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iv0i5uk2c"/><path class="k1r99mbvw"/><path class="pt9o2mr1h"/><path class="inrxyjbem"/><path class="ckn517gcp"/><path class="knsr51bbj"/>`,
		"fallback": "tabler-flags:rainbow",
	});
}

export default Component;
