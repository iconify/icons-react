import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y7rorjg8o.css';
import '../../css/d/d_o7tid8q.css';
import '../../css/z/zcmx7np5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y7rorjg8o"/><path class="d_o7tid8q"/><path class="zcmx7np5h"/>`,
		"fallback": "energy-icons:toolbox-48-bold",
	});
}

export default Component;
