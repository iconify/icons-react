import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxe47ha6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxe47ha6o"/>`,
		"fallback": "lucide-extended:replace-filled",
	});
}

export default Component;
