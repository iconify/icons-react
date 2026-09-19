import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynhhlqb6o.css';
import '../../css/m/m1wo2_c3g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ynhhlqb6o"/><path class="m1wo2_c3g"/>`,
		"fallback": "flat-color-icons:registered-trademark",
	});
}

export default Component;
