import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjtld_bzn.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjtld_bzn"/>`,
		"fallback": "fluent-mdl2:sync-to-p-c",
	});
}

export default Component;
