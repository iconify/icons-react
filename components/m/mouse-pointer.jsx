import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w8daq9bah.css';
import '../../css/s/s6nu0fbig.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="w8daq9bah"/><path class="s6nu0fbig"/></g>`,
		"fallback": "glyphs-poly:mouse-pointer",
	});
}

export default Component;
