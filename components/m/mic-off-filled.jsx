import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g72-7bt9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g72-7bt9j"/>`,
		"fallback": "lucide-extended:mic-off-filled",
	});
}

export default Component;
