import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/bub5ysbln.css';
import '../../css/w/w2tzu254s.css';
import '../../css/p/pzccn-q-b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="bub5ysbln"/><path class="w2tzu254s"/><path class="pzccn-q-b"/></g>`,
		"fallback": "icon-park:other",
	});
}

export default Component;
