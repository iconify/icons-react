import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kolhlm-_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kolhlm-_x"/>`,
		"fallback": "lucide-extended:margin-vertical-filled",
	});
}

export default Component;
