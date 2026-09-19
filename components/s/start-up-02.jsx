import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rwwixqy8h.css';
import '../../css/g/gn3v4ubtn.css';
import '../../css/s/swxcbrbza.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="rwwixqy8h"/><path class="gn3v4ubtn"/><path class="swxcbrbza"/></g>`,
		"fallback": "hugeicons:start-up-02",
	});
}

export default Component;
