import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c25225b7t.css';
import '../../css/c/cy89d844n.css';
import '../../css/c/cqgc1xk8r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c25225b7t"/><path class="cy89d844n"/><path class="cqgc1xk8r"/>`,
		"fallback": "energy-icons:toolbox-48",
	});
}

export default Component;
