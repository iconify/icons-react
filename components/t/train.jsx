import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymd4orbxh.css';
import '../../css/m/m7rus1bei.css';
import '../../css/v/vaiokxbaf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse transform="rotate(-45 256.001 304)" class="ymd4orbxh"/><path class="m7rus1bei"/><path class="vaiokxbaf"/>`,
		"fallback": "famicons:train",
	});
}

export default Component;
