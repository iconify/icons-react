import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pr5i7ibxx.css';
import '../../css/s/snt69ubhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pr5i7ibxx"/><path class="snt69ubhp"/></g>`,
		"fallback": "hugeicons:square-arrow-diagonal-02",
	});
}

export default Component;
