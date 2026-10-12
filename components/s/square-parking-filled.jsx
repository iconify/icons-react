import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb3rc9oyk.css';
import '../../css/g/glve-ra-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb3rc9oyk"/><path clip-rule="evenodd" class="glve-ra-p"/>`,
		"fallback": "lucide-extended:square-parking-filled",
	});
}

export default Component;
