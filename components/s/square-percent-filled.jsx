import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml22co8ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ml22co8ts"/>`,
		"fallback": "lucide-extended:square-percent-filled",
	});
}

export default Component;
