import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/z/zo2iebc8e.css';
import '../../css/v/vrfx1eshy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="zo2iebc8e"/><path class="vrfx1eshy"/></g>`,
		"fallback": "streamline-kameleon-color:nuclear-mushroom",
	});
}

export default Component;
