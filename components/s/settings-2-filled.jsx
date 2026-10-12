import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x12x9ab0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x12x9ab0z"/>`,
		"fallback": "lucide-extended:settings-2-filled",
	});
}

export default Component;
