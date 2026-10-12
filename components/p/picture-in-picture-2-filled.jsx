import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfa1yjcla.css';
import '../../css/j/j6hyv93_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfa1yjcla"/><path class="j6hyv93_u"/>`,
		"fallback": "lucide-extended:picture-in-picture-2-filled",
	});
}

export default Component;
