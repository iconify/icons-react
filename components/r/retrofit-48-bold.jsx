import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/x/x1l7c_xru.css';
import '../../css/m/m9o881-gj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="x1l7c_xru"/><path class="m9o881-gj"/>`,
		"fallback": "energy-icons:retrofit-48-bold",
	});
}

export default Component;
