import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/y/y6f0jibvm.css';
import '../../css/d/d6mxzfb5p.css';
import '../../css/c/ckfhz0m9u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="y6f0jibvm"/><path class="d6mxzfb5p"/><path class="ckfhz0m9u"/></g>`,
		"fallback": "icon-park:sliding-vertical",
	});
}

export default Component;
