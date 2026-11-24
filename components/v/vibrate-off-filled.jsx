import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/higjms7is.css';
import '../../css/f/frhkzlbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="higjms7is"/><path class="frhkzlbqd"/>`,
		"fallback": "lucide-extended:vibrate-off-filled",
	});
}

export default Component;
