import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y12mmacdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y12mmacdy"/>`,
		"fallback": "lucide-extended:panels-left-bottom-filled",
	});
}

export default Component;
