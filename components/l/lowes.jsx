import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjo3nrs0n.css';
import '../../css/n/nb2wv2d3u.css';

const viewBox = {"width":91.24,"height":42.97};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjo3nrs0n"/><path class="nb2wv2d3u"/>`,
		"fallback": "thesvg-color:lowes",
	});
}

export default Component;
