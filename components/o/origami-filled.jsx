import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq6x7zbjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aq6x7zbjp"/>`,
		"fallback": "lucide-extended:origami-filled",
	});
}

export default Component;
