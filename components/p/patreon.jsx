import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zc2gdbbpb.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zc2gdbbpb"/>`,
		"fallback": "file-icons:patreon",
	});
}

export default Component;
