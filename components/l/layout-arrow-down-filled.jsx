import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdwx88n2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdwx88n2z"/>`,
		"fallback": "lucide-extended:layout-arrow-down-filled",
	});
}

export default Component;
