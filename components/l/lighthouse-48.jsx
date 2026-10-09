import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh9p_6w5s.css';
import '../../css/y/y2yxtt6_c.css';
import '../../css/l/lhb-r0bja.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh9p_6w5s"/><path class="y2yxtt6_c"/><path class="lhb-r0bja"/>`,
		"fallback": "energy-icons:lighthouse-48",
	});
}

export default Component;
