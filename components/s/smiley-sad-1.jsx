import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjmd6lg4e.css';
import '../../css/s/sa7njjq3m.css';
import '../../css/c/c9hx8jb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rjmd6lg4e"/><path class="sa7njjq3m"/><path class="c9hx8jb4p"/></g>`,
		"fallback": "streamline-ultimate:smiley-sad-1",
	});
}

export default Component;
