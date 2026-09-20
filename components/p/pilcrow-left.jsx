import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifp3-ac9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifp3-ac9d"/>`,
		"fallback": "lucide:pilcrow-left",
	});
}

export default Component;
