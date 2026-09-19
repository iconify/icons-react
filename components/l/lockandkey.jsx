import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3jxsg1op.css';
import '../../css/k/kt2gkjn1h.css';
import '../../css/p/pejt3f8ll.css';
import '../../css/d/dem270o5u.css';
import '../../css/k/kv2w_5bmr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3jxsg1op"/><path class="kt2gkjn1h"/><path class="pejt3f8ll"/><path class="dem270o5u"/><path class="kv2w_5bmr"/>`,
		"fallback": "fxemoji:lockandkey",
	});
}

export default Component;
