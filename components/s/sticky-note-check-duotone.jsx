import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qygv4bbtf.css';
import '../../css/c/c37msdwqu.css';
import '../../css/j/jh-jfdc-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qygv4bbtf"/><path class="c37msdwqu"/><path class="jh-jfdc-y"/></g>`,
		"fallback": "lucide-extended:sticky-note-check-duotone",
	});
}

export default Component;
