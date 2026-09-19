import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cthaipb1q.css';
import '../../css/b/b-6rmutkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cthaipb1q"/><path class="b-6rmutkb"/></g>`,
		"fallback": "hugeicons:touchpad-02",
	});
}

export default Component;
