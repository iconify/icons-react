import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qg1bknb0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qg1bknb0d"/>`,
		"fallback": "lucide-extended:volume-filled",
	});
}

export default Component;
