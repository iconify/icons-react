import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vboym7chi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vboym7chi"/>`,
		"fallback": "lucide:text-cursor-input",
	});
}

export default Component;
