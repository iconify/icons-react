import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv60hwb7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv60hwb7z"/>`,
		"fallback": "lucide:ticket-percent",
	});
}

export default Component;
