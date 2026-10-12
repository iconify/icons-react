import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yiwzlsbsz.css';
import '../../css/z/zz89phbve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yiwzlsbsz"/><path class="zz89phbve"/>`,
		"fallback": "lucide-extended:mail-warning-filled",
	});
}

export default Component;
