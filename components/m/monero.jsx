import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o0xlczgvc.css';
import '../../css/s/syzigfb3q.css';
import '../../css/j/j_a6aebui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o0xlczgvc"/><path class="syzigfb3q"/><path class="j_a6aebui"/>`,
		"fallback": "selfhst:monero",
	});
}

export default Component;
