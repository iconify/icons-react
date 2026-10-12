import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hvjbyxbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hvjbyxbih"/>`,
		"fallback": "lucide-extended:user-round-x-filled",
	});
}

export default Component;
