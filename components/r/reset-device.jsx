import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uij1yvb9q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uij1yvb9q"/>`,
		"fallback": "fluent-mdl2:reset-device",
	});
}

export default Component;
