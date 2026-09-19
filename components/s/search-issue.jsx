import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kw1el3vtd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kw1el3vtd"/>`,
		"fallback": "fluent-mdl2:search-issue",
	});
}

export default Component;
