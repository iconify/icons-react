import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgf5td-lq.css';
import '../../css/m/mpdgb_2fp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgf5td-lq"/><path class="mpdgb_2fp"/>`,
		"fallback": "lucide-extended:square-arrow-up-exit-filled",
	});
}

export default Component;
