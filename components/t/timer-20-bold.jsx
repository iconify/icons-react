import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4i7afb6c.css';
import '../../css/z/zjxzq32mp.css';
import '../../css/s/s9gv9gb6v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o4i7afb6c"/><path class="zjxzq32mp"/><path class="s9gv9gb6v"/>`,
		"fallback": "energy-icons:timer-20-bold",
	});
}

export default Component;
