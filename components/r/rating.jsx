import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfvx-db7p.css';
import '../../css/e/ecev0ub1v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kfvx-db7p"/><path class="ecev0ub1v"/>`,
		"fallback": "flat-color-icons:rating",
	});
}

export default Component;
