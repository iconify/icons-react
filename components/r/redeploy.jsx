import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyf8v-lwx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyf8v-lwx"/>`,
		"fallback": "fluent-mdl2:redeploy",
	});
}

export default Component;
