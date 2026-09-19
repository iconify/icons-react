import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oemqfsbjh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oemqfsbjh"/>`,
		"fallback": "fluent-mdl2:triple-column-wide",
	});
}

export default Component;
