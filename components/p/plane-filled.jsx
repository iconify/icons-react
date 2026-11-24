import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2qmclqnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2qmclqnb"/>`,
		"fallback": "lucide-extended:plane-filled",
	});
}

export default Component;
