import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egmmgub_l.css';
import '../../css/u/u1hnyj58h.css';
import '../../css/b/b5hlbebng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egmmgub_l"/><path class="u1hnyj58h"/><path class="b5hlbebng"/>`,
		"fallback": "energy-icons:time-of-use-20-bold",
	});
}

export default Component;
