import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ophuzpj3o.css';
import '../../css/n/nd0ottb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ophuzpj3o"/><path class="nd0ottb3s"/></g>`,
		"fallback": "lucide-extended:navigation-duotone",
	});
}

export default Component;
