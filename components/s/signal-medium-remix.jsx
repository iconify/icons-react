import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b21_4_b5h.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b21_4_b5h"/>`,
		"fallback": "streamline:signal-medium-remix",
	});
}

export default Component;
