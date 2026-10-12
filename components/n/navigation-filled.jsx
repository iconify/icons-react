import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw8_nh79g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw8_nh79g"/>`,
		"fallback": "lucide-extended:navigation-filled",
	});
}

export default Component;
