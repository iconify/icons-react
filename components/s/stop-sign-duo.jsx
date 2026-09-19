import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j9zzo3bwq.css';
import '../../css/q/qbvum3bcn.css';
import '../../css/e/e_fmn1lsi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j9zzo3bwq"/><path class="qbvum3bcn"/><path class="e_fmn1lsi"/></g>`,
		"fallback": "glyphs:stop-sign-duo",
	});
}

export default Component;
