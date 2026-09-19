import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo6hfzsfi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo6hfzsfi"/>`,
		"fallback": "fluent-mdl2:toggle-left",
	});
}

export default Component;
