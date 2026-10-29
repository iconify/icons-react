import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji5e_cc1a.css';
import '../../css/h/h1ei_9byu.css';
import '../../css/k/kh6xzbb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji5e_cc1a"/><path class="h1ei_9byu"/><path class="kh6xzbb9c"/>`,
		"fallback": "withicons-bauhaus:pill",
	});
}

export default Component;
