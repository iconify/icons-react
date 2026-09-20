import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5qlzhbvm.css';
import '../../css/i/i5_3pc0qy.css';
import '../../css/o/otk84v7nh.css';
import '../../css/t/t0oipbbbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="n5qlzhbvm"/><path class="i5_3pc0qy"/><path class="otk84v7nh"/><path class="t0oipbbbu"/></g>`,
		"fallback": "lets-icons:watch-light",
	});
}

export default Component;
