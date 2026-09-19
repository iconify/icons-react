import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i247ps4cp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i247ps4cp"/>`,
		"fallback": "fluent-mdl2:more-sports",
	});
}

export default Component;
