import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh5gb5v9g.css';
import '../../css/u/uo0uz19so.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jh5gb5v9g"/><path class="uo0uz19so"/>`,
		"fallback": "energy-icons:pine-tree-48",
	});
}

export default Component;
