import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijtgd6bbq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijtgd6bbq"/>`,
		"fallback": "fluent-emoji-high-contrast:soon-arrow",
	});
}

export default Component;
