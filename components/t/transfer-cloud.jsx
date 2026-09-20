import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/j/j8i4y3bna.css';
import '../../css/m/my0pw4gvk.css';
import '../../css/a/ahyq0obnb.css';
import '../../css/w/w76av6dsc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="j8i4y3bna"/><path class="my0pw4gvk"/><path class="ahyq0obnb"/><path class="w76av6dsc"/></g>`,
		"fallback": "streamline-kameleon-color:transfer-cloud",
	});
}

export default Component;
