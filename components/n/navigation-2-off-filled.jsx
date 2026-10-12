import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gscxrkdyg.css';
import '../../css/d/du48p_lje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gscxrkdyg"/><path clip-rule="evenodd" class="du48p_lje"/>`,
		"fallback": "lucide-extended:navigation-2-off-filled",
	});
}

export default Component;
