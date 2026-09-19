import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v281c_u4w.css';
import '../../css/g/gnwyukb8p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v281c_u4w"/><path class="gnwyukb8p"/></g>`,
		"fallback": "glyphs-poly:signal-1",
	});
}

export default Component;
