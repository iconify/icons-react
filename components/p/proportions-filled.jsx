import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u6bd0e58x.css';
import '../../css/i/ikrljqbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u6bd0e58x"/><path class="ikrljqbfc"/>`,
		"fallback": "lucide-extended:proportions-filled",
	});
}

export default Component;
