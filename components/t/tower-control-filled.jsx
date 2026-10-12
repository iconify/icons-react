import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjr_e6btm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjr_e6btm"/>`,
		"fallback": "lucide-extended:tower-control-filled",
	});
}

export default Component;
