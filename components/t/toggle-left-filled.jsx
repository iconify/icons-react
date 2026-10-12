import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa48vtf9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa48vtf9f"/>`,
		"fallback": "lucide-extended:toggle-left-filled",
	});
}

export default Component;
