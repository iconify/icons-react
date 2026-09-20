import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ggj775b5b.css';
import '../../css/e/e88c1bc9h.css';
import '../../css/b/b2hbh0bpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ggj775b5b"/><path class="e88c1bc9h"/><path class="b2hbh0bpf"/></g>`,
		"fallback": "tdesign:user-vip",
	});
}

export default Component;
