import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/f/fk3pwbceq.css';
import '../../css/m/m7ti5p94b.css';
import '../../css/y/y_5jxxbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="fk3pwbceq"/><path class="m7ti5p94b"/><path class="y_5jxxbmq"/></g>`,
		"fallback": "streamline-sharp-color:plane-flight-board",
	});
}

export default Component;
