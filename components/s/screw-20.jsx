import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdfpjmbun.css';
import '../../css/t/t8mju9b8g.css';
import '../../css/f/f7uhapy5r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdfpjmbun"/><path class="t8mju9b8g"/><path class="f7uhapy5r"/>`,
		"fallback": "energy-icons:screw-20",
	});
}

export default Component;
