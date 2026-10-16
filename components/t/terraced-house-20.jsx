import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij6dd8bdq.css';
import '../../css/p/psiwifbva.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ij6dd8bdq"/><path class="psiwifbva"/>`,
		"fallback": "energy-icons:terraced-house-20",
	});
}

export default Component;
