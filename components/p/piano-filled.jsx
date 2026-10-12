import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frcsl5bdh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frcsl5bdh"/>`,
		"fallback": "lucide-extended:piano-filled",
	});
}

export default Component;
