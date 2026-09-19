import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/if4zyybqp.css';
import '../../css/k/kag6sfpgh.css';
import '../../css/n/nb181ei5f.css';
import '../../css/v/vlh_t3w3q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="if4zyybqp"/><path class="kag6sfpgh"/><path class="nb181ei5f"/><path class="vlh_t3w3q"/></g>`,
		"fallback": "glyphs:lock-open-1-outline",
	});
}

export default Component;
