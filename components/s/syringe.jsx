import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/c5qci8b2s.css';
import '../../css/c/cbuolj-4j.css';
import '../../css/r/r9a985b0x.css';
import '../../css/b/b888d11zq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="c5qci8b2s"/><path class="cbuolj-4j"/><path class="r9a985b0x"/><path class="b888d11zq"/></g>`,
		"fallback": "si-glyph:syringe",
	});
}

export default Component;
