import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9cl3ld3r.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p9cl3ld3r"/>`,
		"fallback": "fluent-mdl2:mail-options",
	});
}

export default Component;
