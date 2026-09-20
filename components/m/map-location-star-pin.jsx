import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/j3_u2j1qo.css';
import '../../css/r/rdhzimc9m.css';
import '../../css/l/la7s6o9xp.css';
import '../../css/u/u3ebypwvq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="j3_u2j1qo"/><path class="rdhzimc9m"/><path class="la7s6o9xp"/><path class="u3ebypwvq"/></g>`,
		"fallback": "streamline-plump-color:map-location-star-pin",
	});
}

export default Component;
