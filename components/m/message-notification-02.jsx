import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c-jn_38_e.css';
import '../../css/b/be6sunbbx.css';
import '../../css/y/yut10vb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c-jn_38_e"/><path class="be6sunbbx"/><path class="yut10vb4w"/></g>`,
		"fallback": "hugeicons:message-notification-02",
	});
}

export default Component;
