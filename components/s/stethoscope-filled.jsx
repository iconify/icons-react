import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ovcv3qbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ovcv3qbox"/>`,
		"fallback": "lucide-extended:stethoscope-filled",
	});
}

export default Component;
