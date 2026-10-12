import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txfdyr9af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txfdyr9af"/>`,
		"fallback": "lucide-extended:user-filled",
	});
}

export default Component;
