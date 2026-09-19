import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bzlye8bhf.css';
import '../../css/a/atskisbnt.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="bzlye8bhf"/><path class="atskisbnt"/></g>`,
		"fallback": "si-glyph:link-1",
	});
}

export default Component;
