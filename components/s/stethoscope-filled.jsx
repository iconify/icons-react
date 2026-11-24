import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8a7etb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8a7etb5w"/>`,
		"fallback": "lucide-extended:stethoscope-filled",
	});
}

export default Component;
