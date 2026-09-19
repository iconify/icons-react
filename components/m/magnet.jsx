import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwdw3u4am.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwdw3u4am"/>`,
		"fallback": "glyphs:magnet",
	});
}

export default Component;
