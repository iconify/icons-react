import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/bmfy1bdgs.css';
import '../../css/e/ei8tu2b9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="bmfy1bdgs"/><path class="ei8tu2b9q"/></g>`,
		"fallback": "icon-park:water",
	});
}

export default Component;
