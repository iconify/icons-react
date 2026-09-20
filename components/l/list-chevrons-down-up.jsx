import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pndt1acbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pndt1acbo"/>`,
		"fallback": "lucide:list-chevrons-down-up",
	});
}

export default Component;
