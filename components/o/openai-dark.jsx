import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0iidabjq.css';

const viewBox = {"width":256,"height":260};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0iidabjq"/>`,
		"fallback": "thesvg-color:openai-dark",
	});
}

export default Component;
