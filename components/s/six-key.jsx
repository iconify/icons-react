import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/b/b51-lhp3z.css';
import '../../css/p/pug2ixu7e.css';
import '../../css/f/fc57d0awe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><rect class="b51-lhp3z"/><path class="pug2ixu7e"/><path class="fc57d0awe"/></g>`,
		"fallback": "icon-park:six-key",
	});
}

export default Component;
