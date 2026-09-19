import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l27zjez7h.css';
import '../../css/i/iawhjgcvt.css';
import '../../css/a/a5ucr2j4s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l27zjez7h"/><path class="iawhjgcvt"/><path class="a5ucr2j4s"/></g>`,
		"fallback": "fluent-emoji-flat:thong-sandal",
	});
}

export default Component;
