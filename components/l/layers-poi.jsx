import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9tbpdr2g.css';
import '../../css/t/tf2al91ur.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9tbpdr2g"/><path class="tf2al91ur"/>`,
		"fallback": "gis:layers-poi",
	});
}

export default Component;
