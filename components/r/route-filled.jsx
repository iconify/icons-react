import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqn_vacfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqn_vacfr"/>`,
		"fallback": "lucide-extended:route-filled",
	});
}

export default Component;
