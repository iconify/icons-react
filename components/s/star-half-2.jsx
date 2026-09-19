import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-70sba8t.css';
import '../../css/s/s9xtenb9b.css';
import '../../css/g/g_pe0ebql.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-70sba8t"/><path clip-rule="evenodd" class="s9xtenb9b"/><path clip-rule="evenodd" class="g_pe0ebql"/></g>`,
		"fallback": "glyphs-poly:star-half-2",
	});
}

export default Component;
