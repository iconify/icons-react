import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bycj2bqiy.css';
import '../../css/n/nfo4jpdxh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bycj2bqiy"/><path class="nfo4jpdxh"/>`,
		"fallback": "ion:social-hackernews-outline",
	});
}

export default Component;
