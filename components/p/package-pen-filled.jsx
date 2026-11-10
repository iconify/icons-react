import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dktvvbced.css';
import '../../css/m/msy_44tas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dktvvbced"/><path clip-rule="evenodd" class="msy_44tas"/>`,
		"fallback": "lucide-extended:package-pen-filled",
	});
}

export default Component;
