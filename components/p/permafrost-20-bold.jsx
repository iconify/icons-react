import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl0h3gwjp.css';
import '../../css/f/fg3z-34yr.css';
import '../../css/x/x657ncclk.css';
import '../../css/r/rc0o1ca8c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl0h3gwjp"/><path class="fg3z-34yr"/><path class="x657ncclk"/><path class="rc0o1ca8c"/>`,
		"fallback": "energy-icons:permafrost-20-bold",
	});
}

export default Component;
