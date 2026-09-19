import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdxjo73ia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdxjo73ia"/>`,
		"fallback": "game-icons:long-antennae-bug",
	});
}

export default Component;
