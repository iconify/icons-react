import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/i/ildb-bnvb.css';
import '../../css/x/xo77lkb4b.css';
import '../../css/y/y8rntqb3f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ildb-bnvb"/><path class="xo77lkb4b"/><path class="y8rntqb3f"/></g>`,
		"fallback": "streamline-plump-color:justice-scale-2",
	});
}

export default Component;
