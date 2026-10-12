import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8zpdgb-u.css';
import '../../css/f/fuln-e3lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8zpdgb-u"/><path class="fuln-e3lv"/>`,
		"fallback": "lucide-extended:satellite-dish-filled",
	});
}

export default Component;
