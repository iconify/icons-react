import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p71cm1b1k.css';
import '../../css/e/e3pn2bxuq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="p71cm1b1k"/><path class="e3pn2bxuq"/></g>`,
		"fallback": "icon-park:setting-one",
	});
}

export default Component;
