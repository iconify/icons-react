import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ogxepvf0r.css';
import '../../css/k/kszy58azx.css';
import '../../css/o/ojqphszdh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ogxepvf0r"/><path class="kszy58azx"/><path clip-rule="evenodd" class="ojqphszdh"/></g>`,
		"fallback": "glyphs-poly:lightbulb-1",
	});
}

export default Component;
