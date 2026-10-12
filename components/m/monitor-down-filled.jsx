import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tggio837a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tggio837a"/>`,
		"fallback": "lucide-extended:monitor-down-filled",
	});
}

export default Component;
