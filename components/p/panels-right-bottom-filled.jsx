import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gch9l5uyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gch9l5uyh"/>`,
		"fallback": "lucide-extended:panels-right-bottom-filled",
	});
}

export default Component;
