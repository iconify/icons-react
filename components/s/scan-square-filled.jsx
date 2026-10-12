import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i_tbmpogi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i_tbmpogi"/>`,
		"fallback": "lucide-extended:scan-square-filled",
	});
}

export default Component;
