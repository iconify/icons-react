import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb9fn2b6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb9fn2b6k"/>`,
		"fallback": "lucide-extended:layers-minus-filled",
	});
}

export default Component;
