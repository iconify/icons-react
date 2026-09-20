import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evntg6b5z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evntg6b5z"/>`,
		"fallback": "streamline:user-protection-2-solid",
	});
}

export default Component;
