import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckfz21k3q.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckfz21k3q"/>`,
		"fallback": "fluent-mdl2:video-search",
	});
}

export default Component;
