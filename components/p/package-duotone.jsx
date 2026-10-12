import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7uyn8bgg.css';
import '../../css/l/l7ocqgb5a.css';
import '../../css/z/z2pwwl38w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7uyn8bgg"/><path class="l7ocqgb5a"/><path class="z2pwwl38w"/></g>`,
		"fallback": "lucide-extended:package-duotone",
	});
}

export default Component;
