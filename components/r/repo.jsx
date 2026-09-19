import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7kss_j1s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7kss_j1s"/>`,
		"fallback": "fluent-mdl2:repo",
	});
}

export default Component;
