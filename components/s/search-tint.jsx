import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whkshnk2k.css';
import '../../css/a/av-7svb0x.css';
import '../../css/b/b7d5grbrs.css';
import '../../css/a/aniouw7ao.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="whkshnk2k"/><path class="av-7svb0x"/><path class="b7d5grbrs"/><path class="aniouw7ao"/></g>`,
		"fallback": "glyphs-poly:search-tint",
	});
}

export default Component;
