import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_3vepb9s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e_3vepb9s"/>`,
		"fallback": "teenyicons:message-text-alt-solid",
	});
}

export default Component;
