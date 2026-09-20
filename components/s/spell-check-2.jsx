import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqpax39ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqpax39ar"/>`,
		"fallback": "lucide:spell-check-2",
	});
}

export default Component;
