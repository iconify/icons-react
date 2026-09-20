import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt0usqk2s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kt0usqk2s"/>`,
		"fallback": "streamline:tag-alt-solid",
	});
}

export default Component;
