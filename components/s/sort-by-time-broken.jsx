import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vkwwp42am.css';
import '../../css/b/bw4rmmbty.css';
import '../../css/n/nyyahnbxx.css';
import '../../css/b/byu9zgdxu.css';
import '../../css/e/eonjggvry.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vkwwp42am"/><path class="bw4rmmbty"/><path class="nyyahnbxx"/><circle class="byu9zgdxu"/><path class="eonjggvry"/></g>`,
		"fallback": "solar:sort-by-time-broken",
	});
}

export default Component;
