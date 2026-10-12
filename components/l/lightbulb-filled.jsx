import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puig1pbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puig1pbjo"/>`,
		"fallback": "lucide-extended:lightbulb-filled",
	});
}

export default Component;
