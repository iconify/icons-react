import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoa-yhb9x.css';
import '../../css/j/jsnsy0b9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eoa-yhb9x"/><path class="jsnsy0b9j"/></g>`,
		"fallback": "lucide-extended:pin-duotone",
	});
}

export default Component;
