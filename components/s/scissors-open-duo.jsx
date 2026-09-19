import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cw8bifcxs.css';
import '../../css/s/s63-y8bkd.css';
import '../../css/a/ajrmm7buk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cw8bifcxs"/><path clip-rule="evenodd" class="s63-y8bkd"/><path class="ajrmm7buk"/></g>`,
		"fallback": "glyphs:scissors-open-duo",
	});
}

export default Component;
