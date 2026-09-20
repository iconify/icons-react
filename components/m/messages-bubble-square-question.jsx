import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lg0k71bog.css';
import '../../css/a/a4m3uj2pt.css';
import '../../css/f/f9iizbbel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lg0k71bog"/><path class="a4m3uj2pt"/><path class="f9iizbbel"/></g>`,
		"fallback": "streamline-ultimate:messages-bubble-square-question",
	});
}

export default Component;
