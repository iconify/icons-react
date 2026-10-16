import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da8ahcs8d.css';
import '../../css/f/fhiwyn5qd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da8ahcs8d"/><path class="fhiwyn5qd"/>`,
		"fallback": "energy-icons:subscript-48",
	});
}

export default Component;
