import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfd2lvbyk.css';
import '../../css/q/qfxjj7d4y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfd2lvbyk"/><path class="qfxjj7d4y"/>`,
		"fallback": "streamline-pixel:music-vinyl-record",
	});
}

export default Component;
