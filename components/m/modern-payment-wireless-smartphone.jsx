import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/hoaaswixn.css';
import '../../css/u/ur_z-2b_k.css';
import '../../css/y/yk6pcp28q.css';
import '../../css/h/hlmw3rb0w.css';
import '../../css/b/b25kv6bcb.css';
import '../../css/i/iwtmg7hsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="hoaaswixn"/><path class="ur_z-2b_k"/><path class="yk6pcp28q"/><path class="hlmw3rb0w"/><path class="b25kv6bcb"/><path class="iwtmg7hsa"/></g>`,
		"fallback": "streamline-freehand-color:modern-payment-wireless-smartphone",
	});
}

export default Component;
