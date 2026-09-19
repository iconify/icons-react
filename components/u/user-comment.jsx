import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ozeprfbhu.css';
import '../../css/p/pwezdyf0e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ozeprfbhu"/><path clip-rule="evenodd" class="pwezdyf0e"/></g>`,
		"fallback": "glyphs-poly:user-comment",
	});
}

export default Component;
