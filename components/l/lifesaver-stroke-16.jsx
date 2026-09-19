import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/u/urswrcbmq.css';
import '../../css/g/g_xqm8rqg.css';
import '../../css/k/kv3u5obgt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="urswrcbmq"/><circle class="g_xqm8rqg"/><path class="kv3u5obgt"/></g>`,
		"fallback": "garden:lifesaver-stroke-16",
	});
}

export default Component;
