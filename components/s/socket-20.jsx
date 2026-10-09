import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmjqnac7l.css';
import '../../css/w/w4wlpvbuu.css';
import '../../css/i/i31k85bxe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmjqnac7l"/><path class="w4wlpvbuu"/><path class="i31k85bxe"/>`,
		"fallback": "energy-icons:socket-20",
	});
}

export default Component;
