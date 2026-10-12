import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg1u9hc7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jg1u9hc7t"/>`,
		"fallback": "lucide-extended:receipt-euro-filled",
	});
}

export default Component;
