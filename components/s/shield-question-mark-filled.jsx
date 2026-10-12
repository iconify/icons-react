import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ch9eefp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9ch9eefp"/>`,
		"fallback": "lucide-extended:shield-question-mark-filled",
	});
}

export default Component;
