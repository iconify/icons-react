import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/p/pcy2ipnog.css';
import '../../css/g/g-65bbsus.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="pcy2ipnog"/><path class="g-65bbsus"/></g>`,
		"fallback": "streamline-plump:user-protection-check",
	});
}

export default Component;
