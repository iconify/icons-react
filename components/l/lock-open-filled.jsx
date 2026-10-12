import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oci9svhqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oci9svhqz"/>`,
		"fallback": "lucide-extended:lock-open-filled",
	});
}

export default Component;
