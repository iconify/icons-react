import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b59q-j8lp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b59q-j8lp"/>`,
		"fallback": "fluent-mdl2:search-data",
	});
}

export default Component;
