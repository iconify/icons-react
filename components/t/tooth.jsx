import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/daiwxftqz.css';
import '../../css/s/sjqj356qt.css';
import '../../css/p/pgx2ghbjj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="daiwxftqz"/><path class="sjqj356qt"/><path class="pgx2ghbjj"/></g>`,
		"fallback": "fluent-emoji-flat:tooth",
	});
}

export default Component;
