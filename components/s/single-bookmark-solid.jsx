import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfadvrb4t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfadvrb4t"/>`,
		"fallback": "fluent-mdl2:single-bookmark-solid",
	});
}

export default Component;
