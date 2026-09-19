import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ejn90-baf.css';
import '../../css/m/mw4ezez-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ejn90-baf"/><path class="mw4ezez-u"/></g>`,
		"fallback": "hugeicons:sticky-note-02",
	});
}

export default Component;
