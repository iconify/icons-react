import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdieb42co.css';
import '../../css/s/s1nbg9lfp.css';
import '../../css/l/l5dtm8qih.css';
import '../../css/r/rxlbqwg2m.css';
import '../../css/l/lvjbzjcnh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdieb42co"/><path class="s1nbg9lfp"/><path clip-rule="evenodd" class="l5dtm8qih"/><path class="rxlbqwg2m"/><path class="lvjbzjcnh"/></g>`,
		"fallback": "glyphs-poly:trophy",
	});
}

export default Component;
