import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elj7bpqnj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elj7bpqnj"/>`,
		"fallback": "energy-icons:landfill-48",
	});
}

export default Component;
