import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddhh4n0le.css';
import '../../css/y/yxdopybeg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddhh4n0le"/><path class="yxdopybeg"/>`,
		"fallback": "streamline-pixel:music-notes-music-1",
	});
}

export default Component;
