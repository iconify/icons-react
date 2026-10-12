import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfit2dk_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfit2dk_a"/>`,
		"fallback": "lucide-extended:star-off-filled",
	});
}

export default Component;
