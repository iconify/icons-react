import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/glsnqibje.css';
import '../../css/b/b6ykzlr9k.css';
import '../../css/w/wf89k6buf.css';
import '../../css/y/yod4tl2uo.css';
import '../../css/t/t4adpsbdt.css';
import '../../css/p/pr1jznbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="glsnqibje"/><path class="b6ykzlr9k"/><path class="wf89k6buf"/><path class="yod4tl2uo"/><path class="t4adpsbdt"/><path class="pr1jznbmm"/></g>`,
		"fallback": "solar:sleeping-square-line-duotone",
	});
}

export default Component;
