import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/br4v2hbup.css';
import '../../css/c/cn83yka1u.css';
import '../../css/e/em1xsmxvw.css';
import '../../css/e/ea3emzk3u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="br4v2hbup"/><path clip-rule="evenodd" class="cn83yka1u"/><path clip-rule="evenodd" class="em1xsmxvw"/><path class="ea3emzk3u"/></g>`,
		"fallback": "pepicons:map-print",
	});
}

export default Component;
