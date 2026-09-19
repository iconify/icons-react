import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay1xdy5oo.css';

const viewBox = {"width":1792,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay1xdy5oo"/>`,
		"fallback": "fa:reply-all",
	});
}

export default Component;
