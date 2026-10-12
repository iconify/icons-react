import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki9tfbbtw.css';
import '../../css/v/vfhe1wb7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki9tfbbtw"/><path class="vfhe1wb7v"/>`,
		"fallback": "lucide-extended:ship-filled",
	});
}

export default Component;
