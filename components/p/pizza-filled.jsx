import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuf07w3fy.css';
import '../../css/j/jnfkx1eag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zuf07w3fy"/><path class="jnfkx1eag"/>`,
		"fallback": "lucide-extended:pizza-filled",
	});
}

export default Component;
