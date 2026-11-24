import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-4qcuqsb.css';
import '../../css/p/picyieb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k-4qcuqsb"/><path class="picyieb1h"/>`,
		"fallback": "lucide-extended:shrimp-off-filled",
	});
}

export default Component;
