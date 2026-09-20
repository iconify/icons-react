import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/laeczcbca.css';
import '../../css/y/yb620cc9q.css';
import '../../css/a/aq91oiwjl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="laeczcbca"/><path class="yb620cc9q"/><path clip-rule="evenodd" class="aq91oiwjl"/></g>`,
		"fallback": "streamline-plump-color:water-melon-flat",
	});
}

export default Component;
