import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_2pqsbdw.css';
import '../../css/e/et2f85cnx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_2pqsbdw"/><path class="et2f85cnx"/>`,
		"fallback": "energy-icons:pound-48-bold",
	});
}

export default Component;
