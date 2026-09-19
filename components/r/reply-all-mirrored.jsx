import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvt71zbsl.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvt71zbsl"/>`,
		"fallback": "fluent-mdl2:reply-all-mirrored",
	});
}

export default Component;
