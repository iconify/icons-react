import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/ruktc75wh.css';
import '../../css/h/hvt_g6bms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ruktc75wh"/><path class="hvt_g6bms"/></g>`,
		"fallback": "fluent-emoji-flat:vulcan-salute-light",
	});
}

export default Component;
