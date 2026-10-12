import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q_0m6ybdy.css';
import '../../css/s/s2joibctc.css';
import '../../css/w/wtr3z9boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q_0m6ybdy"/><path clip-rule="evenodd" class="s2joibctc"/><path class="wtr3z9boz"/>`,
		"fallback": "lucide-extended:user-key-filled",
	});
}

export default Component;
