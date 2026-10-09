import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmeuqkb-h.css';
import '../../css/h/hp4dggb8v.css';
import '../../css/d/dzdrvzb6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmeuqkb-h"/><path class="hp4dggb8v"/><path class="dzdrvzb6p"/>`,
		"fallback": "energy-icons:trophy-48",
	});
}

export default Component;
