import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i5i-6tbql.css';
import '../../css/h/hs2z7ejyy.css';
import '../../css/o/ob8610b7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i5i-6tbql"/><path class="hs2z7ejyy"/><path class="ob8610b7a"/></g>`,
		"fallback": "lucide-extended:joystick-duotone",
	});
}

export default Component;
