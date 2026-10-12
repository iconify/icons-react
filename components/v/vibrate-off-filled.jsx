import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esg4p2r4f.css';
import '../../css/d/dmxnto4mf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esg4p2r4f"/><path class="dmxnto4mf"/>`,
		"fallback": "lucide-extended:vibrate-off-filled",
	});
}

export default Component;
