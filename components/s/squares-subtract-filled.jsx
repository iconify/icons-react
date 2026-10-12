import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbl53bb5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bbl53bb5t"/>`,
		"fallback": "lucide-extended:squares-subtract-filled",
	});
}

export default Component;
