import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/np8os2bqx.css';
import '../../css/i/ix2-pbbvg.css';
import '../../css/i/if1jqdb4b.css';
import '../../css/c/cmkpikb_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="np8os2bqx"/><path class="ix2-pbbvg"/><path class="if1jqdb4b"/><path class="cmkpikb_t"/></g>`,
		"fallback": "hugeicons:maps-search",
	});
}

export default Component;
