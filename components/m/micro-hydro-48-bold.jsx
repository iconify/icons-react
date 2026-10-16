import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb0k45bkf.css';
import '../../css/f/ftn7apb3z.css';
import '../../css/q/qtoznccub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb0k45bkf"/><path class="ftn7apb3z"/><path class="qtoznccub"/>`,
		"fallback": "energy-icons:micro-hydro-48-bold",
	});
}

export default Component;
