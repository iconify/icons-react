import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j0rnyhxzu.css';
import '../../css/y/yv3ldgslo.css';
import '../../css/v/vd38aibtw.css';
import '../../css/q/qr5-gge8l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j0rnyhxzu"/><path class="yv3ldgslo"/><path class="vd38aibtw"/><path class="qr5-gge8l"/>`,
		"fallback": "energy-icons:load-cell-20",
	});
}

export default Component;
