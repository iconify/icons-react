import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ade6m6cnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ade6m6cnd"/>`,
		"fallback": "lucide-extended:parasol-filled",
	});
}

export default Component;
