import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4twacccu.css';
import '../../css/v/vm32y5bcp.css';
import '../../css/p/p08x5tbis.css';
import '../../css/r/rbd59kb7g.css';
import '../../css/w/wgj9pd01c.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f4twacccu"/><path class="vm32y5bcp"/><path class="p08x5tbis"/><rect class="rbd59kb7g"/><rect class="wgj9pd01c"/></g>`,
		"fallback": "glyphs-poly:mold",
	});
}

export default Component;
