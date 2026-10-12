import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yyz7sxb6l.css';
import '../../css/o/os103abfd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yyz7sxb6l"/><path class="os103abfd"/>`,
		"fallback": "garden:volume-off-stroke-20",
	});
}

export default Component;
