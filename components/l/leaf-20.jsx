import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyzs50b8b.css';
import '../../css/v/vceoc3bqc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fyzs50b8b"/><path class="vceoc3bqc"/>`,
		"fallback": "energy-icons:leaf-20",
	});
}

export default Component;
