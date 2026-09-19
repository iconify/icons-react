import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np5uwltvh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np5uwltvh"/>`,
		"fallback": "fluent-mdl2:remove",
	});
}

export default Component;
