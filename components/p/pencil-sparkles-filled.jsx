import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb_pv7qoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb_pv7qoq"/>`,
		"fallback": "lucide-extended:pencil-sparkles-filled",
	});
}

export default Component;
