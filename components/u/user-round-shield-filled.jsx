import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4qkawp1w.css';
import '../../css/w/woy2hk4bh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4qkawp1w"/><path class="woy2hk4bh"/>`,
		"fallback": "lucide-extended:user-round-shield-filled",
	});
}

export default Component;
