import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud9cl0y3d.css';
import '../../css/a/aba_xubdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ud9cl0y3d"/><path class="aba_xubdq"/>`,
		"fallback": "lucide-extended:message-square-dot-filled",
	});
}

export default Component;
