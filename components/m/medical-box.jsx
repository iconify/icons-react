import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/c/crqzezbkc.css';
import '../../css/p/p9rx95bqb.css';
import '../../css/c/cp1palbkb.css';
import '../../css/e/e6kad7bsr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="crqzezbkc"/><path class="p9rx95bqb"/><path class="cp1palbkb"/><path class="e6kad7bsr"/></g>`,
		"fallback": "icon-park:medical-box",
	});
}

export default Component;
