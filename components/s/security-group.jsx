import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtj73wbon.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtj73wbon"/>`,
		"fallback": "fluent-mdl2:security-group",
	});
}

export default Component;
