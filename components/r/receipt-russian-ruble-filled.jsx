import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir0ltxjco.css';
import '../../css/c/c-llp8bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir0ltxjco"/><path clip-rule="evenodd" class="c-llp8bmv"/>`,
		"fallback": "lucide-extended:receipt-russian-ruble-filled",
	});
}

export default Component;
