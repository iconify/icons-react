import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9_h0wb8s.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z9_h0wb8s"/>`,
		"fallback": "streamline:volume-level-off-solid",
	});
}

export default Component;
