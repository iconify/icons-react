import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/koz_5vb4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="koz_5vb4i"/>`,
		"fallback": "lucide-extended:table-rows-split-filled",
	});
}

export default Component;
