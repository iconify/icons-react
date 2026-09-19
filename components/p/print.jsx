import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rtjruho2j.css';
import '../../css/p/p8ie1g_3o.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rtjruho2j"/><path class="p8ie1g_3o"/></g>`,
		"fallback": "si-glyph:print",
	});
}

export default Component;
