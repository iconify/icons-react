import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6xnjzbga.css';
import '../../css/k/k7by-rbvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6xnjzbga"/><path clip-rule="evenodd" class="k7by-rbvh"/>`,
		"fallback": "lucide-extended:map-pinned-filled",
	});
}

export default Component;
