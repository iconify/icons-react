import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/r/rhd644bpf.css';
import '../../css/i/iqhuk7_4b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="rhd644bpf"/><path class="iqhuk7_4b"/>`,
		"fallback": "ant-design:up-square-twotone",
	});
}

export default Component;
