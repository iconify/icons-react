import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kal9vcqtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kal9vcqtx"/>`,
		"fallback": "lucide-extended:notepad-text-filled",
	});
}

export default Component;
