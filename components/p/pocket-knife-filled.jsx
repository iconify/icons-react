import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/py0upebda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="py0upebda"/>`,
		"fallback": "lucide-extended:pocket-knife-filled",
	});
}

export default Component;
