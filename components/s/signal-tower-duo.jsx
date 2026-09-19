import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zgejto_9f.css';
import '../../css/b/bhhme_0me.css';
import '../../css/d/dg3r1tbgl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zgejto_9f"/><path class="bhhme_0me"/><path class="dg3r1tbgl"/></g>`,
		"fallback": "glyphs:signal-tower-duo",
	});
}

export default Component;
