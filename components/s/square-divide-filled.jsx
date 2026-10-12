import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9xcmbtdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x9xcmbtdz"/>`,
		"fallback": "lucide-extended:square-divide-filled",
	});
}

export default Component;
