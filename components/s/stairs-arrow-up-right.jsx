import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qkejixr2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qkejixr2s"/>`,
		"fallback": "lucide-lab:stairs-arrow-up-right",
	});
}

export default Component;
