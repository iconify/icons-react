import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/etcb43btd.css';
import '../../css/x/xe_mok4yw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="etcb43btd"/><path class="xe_mok4yw"/></g>`,
		"fallback": "lsicon:setting-outline",
	});
}

export default Component;
