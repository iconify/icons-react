import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6wh3497s.css';
import '../../css/k/kz72wdb0i.css';
import '../../css/z/zsn_dkb-f.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/f/frmc66bsi.css';
import '../../css/p/pjuqq5t1u.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6wh3497s"/><path class="kz72wdb0i"/><path class="zsn_dkb-f"/><g class="jn8qy4bru"><path class="frmc66bsi"/><path class="pjuqq5t1u"/></g>`,
		"fallback": "openmoji:pound-banknote",
	});
}

export default Component;
