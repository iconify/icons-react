import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/u/ufzwhw8qy.css';
import '../../css/l/l3u7fomsm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ufzwhw8qy"/><path class="l3u7fomsm"/></g>`,
		"fallback": "icon-park-outline:reverse-rotation",
	});
}

export default Component;
