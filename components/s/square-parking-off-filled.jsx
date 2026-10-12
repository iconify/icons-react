import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zenilsb6y.css';
import '../../css/v/veupicb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zenilsb6y"/><path class="veupicb3i"/>`,
		"fallback": "lucide-extended:square-parking-off-filled",
	});
}

export default Component;
