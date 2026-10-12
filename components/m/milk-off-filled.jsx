import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvw8s9b2p.css';
import '../../css/q/qq2gd69ng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yvw8s9b2p"/><path class="qq2gd69ng"/>`,
		"fallback": "lucide-extended:milk-off-filled",
	});
}

export default Component;
