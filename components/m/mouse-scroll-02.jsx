import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/camt8iiuh.css';
import '../../css/l/l_skzbk-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="camt8iiuh"/><path class="l_skzbk-t"/></g>`,
		"fallback": "hugeicons:mouse-scroll-02",
	});
}

export default Component;
