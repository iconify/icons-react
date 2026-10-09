import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grk1onbae.css';
import '../../css/x/x7xzn4n0q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grk1onbae"/><path class="x7xzn4n0q"/>`,
		"fallback": "energy-icons:mouse-48",
	});
}

export default Component;
