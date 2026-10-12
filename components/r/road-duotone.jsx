import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h08h_jfnw.css';
import '../../css/y/yvy_a1b-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h08h_jfnw"/><path class="yvy_a1b-t"/></g>`,
		"fallback": "lucide-extended:road-duotone",
	});
}

export default Component;
