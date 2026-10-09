import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvh-2kb-f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvh-2kb-f"/>`,
		"fallback": "energy-icons:square-dashed-48",
	});
}

export default Component;
