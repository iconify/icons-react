import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8-4tb2b.css';
import '../../css/u/upuox6bpg.css';
import '../../css/g/g-n25fwzg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gc8-4tb2b"/><path class="upuox6bpg"/><path class="g-n25fwzg"/>`,
		"fallback": "ant-design:right-square-twotone",
	});
}

export default Component;
