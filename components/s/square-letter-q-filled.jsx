import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3__ojbef.css';
import '../../css/u/u9lqayb9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3__ojbef"/><path clip-rule="evenodd" class="u9lqayb9d"/>`,
		"fallback": "lucide-extended:square-letter-q-filled",
	});
}

export default Component;
