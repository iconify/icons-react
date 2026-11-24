import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-2jtuy5b.css';
import '../../css/i/iuh-1_bkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-2jtuy5b"/><path clip-rule="evenodd" class="iuh-1_bkr"/>`,
		"fallback": "lucide-extended:tv-minimal-play-filled",
	});
}

export default Component;
