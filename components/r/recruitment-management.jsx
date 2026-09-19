import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3odx4w7c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3odx4w7c"/>`,
		"fallback": "fluent-mdl2:recruitment-management",
	});
}

export default Component;
