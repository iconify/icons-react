import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/c8p3g3byb.css';
import '../../css/a/acjzmsjdx.css';
import '../../css/p/pvmqixbkk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path clip-rule="evenodd" class="c8p3g3byb"/><path class="acjzmsjdx"/><path class="pvmqixbkk"/></g>`,
		"fallback": "icon-park:teeth",
	});
}

export default Component;
