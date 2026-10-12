import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_txi0raq.css';
import '../../css/x/xb_-jcbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k_txi0raq"/><path clip-rule="evenodd" class="xb_-jcbty"/>`,
		"fallback": "lucide-extended:locate-fixed-filled",
	});
}

export default Component;
