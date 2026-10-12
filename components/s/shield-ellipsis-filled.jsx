import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpw9o4b4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gpw9o4b4d"/>`,
		"fallback": "lucide-extended:shield-ellipsis-filled",
	});
}

export default Component;
