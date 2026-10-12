import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_lk-womu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_lk-womu"/>`,
		"fallback": "lucide-extended:robot-arm-filled",
	});
}

export default Component;
