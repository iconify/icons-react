import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zni3kgb0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zni3kgb0x"/>`,
		"fallback": "lucide-extended:plane-landing-filled",
	});
}

export default Component;
