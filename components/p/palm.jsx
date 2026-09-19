import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rinuwhlnp.css';
import '../../css/b/b19tqsban.css';
import '../../css/j/jgxrsjbxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rinuwhlnp"><path class="b19tqsban"/><rect class="jgxrsjbxi"/></g>`,
		"fallback": "icon-park:palm",
	});
}

export default Component;
