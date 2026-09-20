import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/durr5709b.css';
import '../../css/i/ibed8bc7x.css';
import '../../css/f/f30-13bws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="durr5709b"/><path class="ibed8bc7x"/><path class="f30-13bws"/>`,
		"fallback": "streamline-freehand:waiting-room-clock",
	});
}

export default Component;
