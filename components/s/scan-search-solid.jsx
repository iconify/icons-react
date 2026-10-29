import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_37yhx4m.css';
import '../../css/u/u0a81145e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="l_37yhx4m"/><path class="u0a81145e wm-a"/></g>`,
		"fallback": "withicons:scan-search-solid",
	});
}

export default Component;
