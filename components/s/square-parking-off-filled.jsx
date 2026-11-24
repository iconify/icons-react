import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs_nhrb3i.css';
import '../../css/v/vx68g0b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cs_nhrb3i"/><path class="vx68g0b8i"/>`,
		"fallback": "lucide-extended:square-parking-off-filled",
	});
}

export default Component;
