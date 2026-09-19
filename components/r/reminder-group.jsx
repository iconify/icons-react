import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dz4qsvbth.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dz4qsvbth"/>`,
		"fallback": "fluent-mdl2:reminder-group",
	});
}

export default Component;
