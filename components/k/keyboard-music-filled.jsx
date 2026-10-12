import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fer3w3w-u.css';
import '../../css/p/pairkob_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fer3w3w-u"/><path clip-rule="evenodd" class="pairkob_b"/>`,
		"fallback": "lucide-extended:keyboard-music-filled",
	});
}

export default Component;
