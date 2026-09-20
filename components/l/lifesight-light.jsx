import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/k/kx3vpdb-a.css';
import '../../css/o/o6x0pbbwb.css';

const viewBox = {"width":237,"height":66};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="kx3vpdb-a"/><path class="o6x0pbbwb"/></g>`,
		"fallback": "thesvg-color:lifesight-light",
	});
}

export default Component;
