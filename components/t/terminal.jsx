import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/p/p4anfmj7x.css';
import '../../css/b/b0bz2xbyx.css';
import '../../css/k/kr7u95b8w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><rect class="p4anfmj7x"/><path class="b0bz2xbyx"/><path class="kr7u95b8w"/></g>`,
		"fallback": "icon-park:terminal",
	});
}

export default Component;
