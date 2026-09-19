import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kc7gafb7l.css';
import '../../css/r/rpuylvrbq.css';
import '../../css/p/pwjypgovl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kc7gafb7l"/><path class="rpuylvrbq"/><path class="pwjypgovl"/></g>`,
		"fallback": "hugeicons:vynil-02",
	});
}

export default Component;
