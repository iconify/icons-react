import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rr_hjgb3u.css';
import '../../css/p/pqrse9b2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rr_hjgb3u"/><path class="pqrse9b2w"/></g>`,
		"fallback": "solar:notebook-square-outline",
	});
}

export default Component;
