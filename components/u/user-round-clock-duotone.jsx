import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ix6o9jb3s.css';
import '../../css/n/nygcshbpy.css';
import '../../css/i/iogsahb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ix6o9jb3s"/><path class="nygcshbpy"/><path class="iogsahb3j"/></g>`,
		"fallback": "lucide-extended:user-round-clock-duotone",
	});
}

export default Component;
