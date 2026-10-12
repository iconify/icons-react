import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owfrw6bin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owfrw6bin"/>`,
		"fallback": "lucide-extended:shower-head-filled",
	});
}

export default Component;
