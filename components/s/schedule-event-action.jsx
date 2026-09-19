import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gy2kve2lw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gy2kve2lw"/>`,
		"fallback": "fluent-mdl2:schedule-event-action",
	});
}

export default Component;
