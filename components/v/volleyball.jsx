import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bzw294bui.css';
import '../../css/a/ampzm9j-w.css';
import '../../css/m/m2wucfb3o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bzw294bui"/><path class="ampzm9j-w"/><path class="m2wucfb3o"/></g>`,
		"fallback": "fluent-emoji-flat:volleyball",
	});
}

export default Component;
