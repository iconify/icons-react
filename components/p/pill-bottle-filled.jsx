import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfcrsdfef.css';
import '../../css/o/ot8dm5bxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfcrsdfef"/><path class="ot8dm5bxm"/>`,
		"fallback": "lucide-extended:pill-bottle-filled",
	});
}

export default Component;
