import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u20j3na4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u20j3na4i"/>`,
		"fallback": "lucide-lab:tab-slash",
	});
}

export default Component;
