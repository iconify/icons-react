import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f22uknsdn.css';
import '../../css/j/jpnuobtcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f22uknsdn"/><path class="jpnuobtcv"/>`,
		"fallback": "lucide-extended:megaphone-off-filled",
	});
}

export default Component;
