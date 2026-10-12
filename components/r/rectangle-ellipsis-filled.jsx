import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra22vqljm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ra22vqljm"/>`,
		"fallback": "lucide-extended:rectangle-ellipsis-filled",
	});
}

export default Component;
