import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc7v2ekmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sc7v2ekmk"/>`,
		"fallback": "lucide-extended:message-square-diff-filled",
	});
}

export default Component;
