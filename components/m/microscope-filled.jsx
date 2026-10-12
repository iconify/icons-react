import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl_5w4b-x.css';
import '../../css/d/dr823obko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl_5w4b-x"/><path class="dr823obko"/>`,
		"fallback": "lucide-extended:microscope-filled",
	});
}

export default Component;
