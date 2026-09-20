import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iv4d3bbfk.css';
import '../../css/i/is65izymr.css';
import '../../css/a/awy7qf-1l.css';
import '../../css/w/wpafmib7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="iv4d3bbfk"/><path class="is65izymr"/><path class="awy7qf-1l"/><path class="wpafmib7k"/></g>`,
		"fallback": "lucide-lab:sushi-2",
	});
}

export default Component;
