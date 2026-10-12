import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dysvs-brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dysvs-brd"/>`,
		"fallback": "lucide-extended:panel-top-filled",
	});
}

export default Component;
