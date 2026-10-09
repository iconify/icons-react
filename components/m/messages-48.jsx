import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lre1b2w1l.css';
import '../../css/b/b7wt3uvay.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lre1b2w1l"/><path class="b7wt3uvay"/>`,
		"fallback": "energy-icons:messages-48",
	});
}

export default Component;
