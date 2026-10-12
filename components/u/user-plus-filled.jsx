import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk2pvgbtx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk2pvgbtx"/>`,
		"fallback": "lucide-extended:user-plus-filled",
	});
}

export default Component;
