import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/o/o_h68bqcq.css';
import '../../css/i/ii0xarb6b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="o_h68bqcq"/><path class="ii0xarb6b"/>`,
		"fallback": "ant-design:project-twotone",
	});
}

export default Component;
