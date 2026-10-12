import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqdwyabql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fqdwyabql"/>`,
		"fallback": "lucide-extended:kayak-filled",
	});
}

export default Component;
