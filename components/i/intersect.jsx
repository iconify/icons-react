import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n_ig5ib1q.css';
import '../../css/a/avqyneb1s.css';
import '../../css/k/ksawrcf5u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n_ig5ib1q"/><path class="avqyneb1s"/><path class="ksawrcf5u"/></g>`,
		"fallback": "glyphs-poly:intersect",
	});
}

export default Component;
