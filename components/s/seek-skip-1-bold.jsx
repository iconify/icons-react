import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/g/g3xgywz_t.css';
import '../../css/k/k433me6_u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="g3xgywz_t"/><path class="k433me6_u"/></g>`,
		"fallback": "glyphs:seek-skip-1-bold",
	});
}

export default Component;
