import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brz56sb1o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="brz56sb1o"/>`,
		"fallback": "lucide-extended:table-cells-split-filled",
	});
}

export default Component;
