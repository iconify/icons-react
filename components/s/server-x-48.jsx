import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8umlrboa.css';
import '../../css/y/y69neeb_g.css';
import '../../css/b/bdkl8-dne.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8umlrboa"/><path class="y69neeb_g"/><path class="bdkl8-dne"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:server-x-48",
	});
}

export default Component;
