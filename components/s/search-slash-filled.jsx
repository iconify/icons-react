import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/df92hcbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="df92hcbrj"/>`,
		"fallback": "lucide-extended:search-slash-filled",
	});
}

export default Component;
