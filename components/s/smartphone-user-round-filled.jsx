import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/piwsv7bod.css';
import '../../css/c/c5at6trmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="piwsv7bod"/><path class="c5at6trmc"/>`,
		"fallback": "lucide-extended:smartphone-user-round-filled",
	});
}

export default Component;
