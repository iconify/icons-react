import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7tvpwjwp.css';
import '../../css/x/x-bzt0blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7tvpwjwp"/><path clip-rule="evenodd" class="x-bzt0blf"/>`,
		"fallback": "lucide-extended:square-star-filled",
	});
}

export default Component;
