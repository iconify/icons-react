import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plpgm1gvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plpgm1gvj"/>`,
		"fallback": "lucide:user-round-shield",
	});
}

export default Component;
