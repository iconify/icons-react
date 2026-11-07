import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpo5tjoma.css';
import '../../css/r/rc0x7kb9f.css';
import '../../css/o/o8sw_bbzo.css';
import '../../css/j/j0apqq_6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qpo5tjoma"/><path class="rc0x7kb9f"/><path class="o8sw_bbzo"/><path class="j0apqq_6t"/>`,
		"fallback": "solar:remote-controller-outline",
	});
}

export default Component;
