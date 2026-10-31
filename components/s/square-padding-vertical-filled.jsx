import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2q6z77ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t2q6z77ts"/>`,
		"fallback": "lucide-extended:square-padding-vertical-filled",
	});
}

export default Component;
