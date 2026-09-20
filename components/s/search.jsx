import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnqkeyo-y.css';
import '../../css/d/dsivx0b3n.css';
import '../../css/t/ty0jsobdg.css';
import '../../css/y/ynzitvc6s.css';
import '../../css/o/od026lbdp.css';

const viewBox = {"width":41,"height":41,"left":-0.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnqkeyo-y"/><path class="dsivx0b3n"/><path class="ty0jsobdg"/><path class="ynzitvc6s"/><path class="od026lbdp"/></g>`,
		"fallback": "streamline-stickies-color:search",
	});
}

export default Component;
