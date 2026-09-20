import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9wr-tufw.css';
import '../../css/b/b_gbm88ug.css';
import '../../css/i/inndkdxao.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9wr-tufw"><path class="b_gbm88ug"/><path class="inndkdxao"/></g>`,
		"fallback": "material-icon-theme:otne",
	});
}

export default Component;
