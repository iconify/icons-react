import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x02zofbjn.css';
import '../../css/t/t__73kbdf.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="x02zofbjn"/><path class="t__73kbdf"/></g>`,
		"fallback": "si-glyph:test-tube-2",
	});
}

export default Component;
