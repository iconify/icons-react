import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8f82y98i.css';
import '../../css/i/i23da44dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b8f82y98i"/><path class="i23da44dj"/>`,
		"fallback": "lucide-extended:lighthouse-filled",
	});
}

export default Component;
