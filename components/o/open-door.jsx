import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cdi-fjugt.css';
import '../../css/y/yyx_3z7mv.css';
import '../../css/c/c6nrszujt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cdi-fjugt"/><path clip-rule="evenodd" class="yyx_3z7mv"/><path class="c6nrszujt"/></g>`,
		"fallback": "icon-park-outline:open-door",
	});
}

export default Component;
