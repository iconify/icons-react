import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe0-zvsab.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe0-zvsab"/>`,
		"fallback": "glyphs:map-marker-duo",
	});
}

export default Component;
