import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv0_5r2xu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fv0_5r2xu"/>`,
		"fallback": "lucide-extended:smartphone-charging-filled",
	});
}

export default Component;
