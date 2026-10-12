import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk_0rpbzb.css';
import '../../css/r/r67ffobwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk_0rpbzb"/><path class="r67ffobwc"/>`,
		"fallback": "lucide-extended:sticky-note-minus-filled",
	});
}

export default Component;
