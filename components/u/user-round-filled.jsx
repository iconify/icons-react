import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv_ma3j-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv_ma3j-p"/>`,
		"fallback": "lucide-extended:user-round-filled",
	});
}

export default Component;
