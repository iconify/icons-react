import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r2-y50v-u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r2-y50v-u"/>`,
		"fallback": "fluent-mdl2:visuals-store",
	});
}

export default Component;
