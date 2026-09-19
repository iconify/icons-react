import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r7tj1icek.css';
import '../../css/o/oh3xmvbov.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="r7tj1icek"/><path class="oh3xmvbov"/></g>`,
		"fallback": "si-glyph:link-2",
	});
}

export default Component;
