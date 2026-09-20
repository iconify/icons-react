import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pwebkqbdb.css';
import '../../css/p/pxqnwab7l.css';
import '../../css/w/wm8jtpa0p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pwebkqbdb"/><path class="pxqnwab7l"/><path class="wm8jtpa0p"/></g>`,
		"fallback": "streamline-kameleon-color:nuclear-mushroom-duo",
	});
}

export default Component;
