import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm2wf78uh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm2wf78uh"/>`,
		"fallback": "energy-icons:sparkles-20-bold",
	});
}

export default Component;
