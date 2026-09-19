import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l08213bxs.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l08213bxs"/>`,
		"fallback": "fluent-mdl2:page-solid",
	});
}

export default Component;
