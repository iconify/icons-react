import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia3776b2n.css';
import '../../css/p/ptrhyzbub.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia3776b2n"/><path class="ptrhyzbub"/>`,
		"fallback": "energy-icons:sort-48",
	});
}

export default Component;
