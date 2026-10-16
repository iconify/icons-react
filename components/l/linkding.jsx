import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r9w03ac2i.css';
import '../../css/o/os3vnyi4f.css';
import '../../css/y/y1vbmsb9w.css';
import '../../css/w/wv0c5jsho.css';
import '../../css/n/n018-r6ah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="r9w03ac2i"><circle class="os3vnyi4f"/><g class="y1vbmsb9w"><path class="wv0c5jsho"/><path class="n018-r6ah"/></g></g>`,
		"fallback": "thesvg-color:linkding",
	});
}

export default Component;
