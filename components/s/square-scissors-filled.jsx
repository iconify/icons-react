import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iakgoukpg.css';
import '../../css/p/pabyqgbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iakgoukpg"/><path clip-rule="evenodd" class="pabyqgbcc"/>`,
		"fallback": "lucide-extended:square-scissors-filled",
	});
}

export default Component;
