import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2uborb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2uborb2w"/>`,
		"fallback": "lucide-extended:line-dot-left-horizontal-filled",
	});
}

export default Component;
