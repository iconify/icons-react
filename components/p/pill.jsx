import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb9z1ab3a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb9z1ab3a"/>`,
		"fallback": "fluent-mdl2:pill",
	});
}

export default Component;
