import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvyg7g7cd.css';
import '../../css/s/s-t14rbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvyg7g7cd"/><path clip-rule="evenodd" class="s-t14rbvu"/>`,
		"fallback": "lucide-extended:rocket-filled",
	});
}

export default Component;
